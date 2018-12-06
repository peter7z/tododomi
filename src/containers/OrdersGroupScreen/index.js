import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { object, func, bool } from 'prop-types';

import translate from 'utils/i18n';
import OrdersHeader from 'components/Orders/OrdersHeader';
import OrdersRowHeader from 'components/Orders/OrdersRowHeader';
import OrdersRow from 'components/Orders/OrdersRow';
import { getOrdersGroup, startOrdersGroup, setOrderStatus } from 'actions/orderActions';
import styles from './styles';

class OrdersGroupScreen extends React.Component {
  constructor() {
    super();

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
    const { startGroup, group: { orderIds } } = this.props;
    startGroup(orderIds);
  }

  onChangeOrderStatus(id, delivered) {
    this.props.setOrderStatus(id, delivered);
  }

  render() {
    const {
      group: { grocery },
      ordersGroup: { readyToDeliver, orders },
      loading,
      startLoading,
      statusLoading,
      disabled,
    } = this.props;

    return (
      <View>
        <OrdersHeader onBack={this.onBack} group={this.props.group} />
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
                      statusLoading={statusLoading}
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
  startGroup: orderIds => dispatch(startOrdersGroup(orderIds)),
  setOrderStatus: (id, delivered) => dispatch(setOrderStatus(id, delivered)),
});

export default connect(mapState, mapDispatch)(OrdersGroupScreen);
