import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { object, array, func, bool } from 'prop-types';

import translate from 'utils/i18n';
import OrdersHeader from 'components/Orders/OrdersHeader';
import OrdersRowHeader from 'components/Orders/OrdersRowHeader';
import OrdersRow from 'components/Orders/OrdersRow';
import { getOrdersGroup } from 'actions/orderActions';
import styles from './styles';

class OrdersGroupScreen extends React.Component {
  constructor() {
    super();

    this.onBack = this.onBack.bind(this);
  }

  componentDidMount() {
    const { getOrdersGroup, group: { orderIds } } = this.props;
    getOrdersGroup(orderIds);
  }

  onBack() {
    this.props.navigator.pop();
  }

  render() {
    const { group: { grocery }, orders, loading } = this.props;
    return (
      <View>
        <OrdersHeader onBack={this.onBack} group={this.props.group} />
        <ScrollView style={styles.scroll}>
          <Text style={styles.title}>{translate('ORDERS_GROUP.stops')}</Text>
          <OrdersRowHeader grocery={grocery} />
          <View>
            {loading
              ? <ActivityIndicator style={styles.activity} size="small" />
              : orders.map(order => <OrdersRow key={order.id} order={order} />)
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
  orders: array.isRequired,
  getOrdersGroup: func.isRequired,
  loading: bool.isRequired,
};

const mapState = state => ({
  loading: state.getIn(['orders', 'ordersGroupLoading']),
  orders: state.getIn(['orders', 'ordersGroup']).toJS(),
});

const mapDispatch = dispatch => ({
  getOrdersGroup: orderIds => dispatch(getOrdersGroup(orderIds)),
});

export default connect(mapState, mapDispatch)(OrdersGroupScreen);
