import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { object, func, bool, string } from 'prop-types';

import translate from 'utils/i18n';
import OrdersHeader from 'components/Orders/OrdersHeader';
import OrdersRowHeader from 'components/Orders/OrdersRowHeader';
import OrdersRow from 'components/Orders/OrdersRow';
import { getOrdersGroup, startOrdersGroup, setOrderStatus } from 'actions/orderActions';
import { ORDER_DETAIL_SCREEN } from '../../screens';
import styles from './styles';

class OrdersGroupScreen extends React.Component {
  constructor() {
    super();

    this.state = { changingId: -1 };
    this.isChanging = false;

    this.onEnterOrder = this.onEnterOrder.bind(this);
    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onGroupStart = this.onGroupStart.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  componentDidMount() {
    const { getOrdersGroup, group: { orderIds } } = this.props;
    getOrdersGroup(orderIds);
  }

  onBack() {
    this.props.navigator.pop();
  }

  onGroupStart() {
    const {
      id,
      startGroup,
      group: { orderIds, grocery: { name }, deliveryTime }
    } = this.props;
    startGroup(id, name, deliveryTime, orderIds);
  }

  onEnterOrder(group, order) {
    const { navigator, disabled } = this.props;
    navigator.push({
      screen: ORDER_DETAIL_SCREEN,
      passProps: { group, order, disabled }
    });
  }

  onChangeOrderStatus(orderId, delivered) {
    if (!this.isChanging) {
      this.isChanging = true;
      this.setState(
        { changingId: orderId },
        () => {
          const { id, group: { grocery: { name }, deliveryTime }, setOrderStatus } = this.props;
          setOrderStatus(id, name, deliveryTime, orderId, delivered).then(() => {
            this.isChanging = false;
          });
        });
    }
  }

  render() {
    const {
      group,
      group: { grocery },
      ordersGroup: { readyToDeliver, orders },
      loading,
      startLoading,
      statusLoading,
      disabled,
    } = this.props;

    const { changingId } = this.state;

    return (
      <View>
        <OrdersHeader onBack={this.onBack} group={group} />
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>{translate('ORDERS_GROUP.stops')}</Text>
          <View>
            {loading
              ? <ActivityIndicator style={styles.activity} size="small" />
              : orders && (
                <View>
                  <OrdersRowHeader
                    grocery={grocery}
                    onGroupStart={this.onGroupStart}
                    readyToDeliver={readyToDeliver}
                    startLoading={startLoading}
                    disabled={disabled}
                  />
                  {orders.map(order =>
                    <OrdersRow
                      key={order.id}
                      order={order}
                      onChangeOrderStatus={this.onChangeOrderStatus}
                      onEnterOrder={() => this.onEnterOrder(group, order)}
                      loading={changingId === order.id && statusLoading}
                      disabled={disabled}
                    />
                  )}
                </View>
              )
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

OrdersGroupScreen.navigatorStyle = {
  navBarHidden: true
};

OrdersGroupScreen.propTypes = {
  navigator: object.isRequired,
  id: string.isRequired,
  group: object.isRequired,
  ordersGroup: object.isRequired,
  getOrdersGroup: func.isRequired,
  loading: bool.isRequired,
  startGroup: func.isRequired,
  startLoading: bool.isRequired,
  setOrderStatus: func.isRequired,
  statusLoading: bool.isRequired,
  disabled: bool.isRequired,
};

const mapState = state => ({
  loading: state.getIn(['orders', 'ordersGroupLoading']),
  startLoading: state.getIn(['orders', 'startGroupLoading']),
  statusLoading: state.getIn(['orders', 'setOrderLoading']),
  ordersGroup: state.getIn(['orders', 'ordersGroup']).toJS(),
});

const mapDispatch = dispatch => ({
  getOrdersGroup: orderIds => dispatch(getOrdersGroup(orderIds)),
  startGroup: (id, name, deliveryTime, orderIds) => dispatch(startOrdersGroup(id, name, deliveryTime, orderIds)),
  setOrderStatus: (id, name, deliveryTime, orderId, delivered) => dispatch(setOrderStatus(id, name, deliveryTime, orderId, delivered)),
});

export default connect(mapState, mapDispatch)(OrdersGroupScreen);
