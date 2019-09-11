import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bool, object, func, string } from 'prop-types';
import translate from 'utils/i18n';
import ProductList from 'components/Product/ProductList';
import { getOrder, setOrderStatus } from 'actions/orderActions';
import OrdersDetailHeader from 'components/Orders/OrdersDetailHeader';
import OrdersDetailFooter from 'components/Orders/OrdersDetailFooter';
import { NOT_DELIVERED_REASONS_MODAL_SCREEN } from 'constants/screenConstants';

import {
  headerHeight,
  scrollHeight,
  footerHeight,
  styles
} from './styles';

class OrderDetailScreen extends Component {
  componentDidMount = () => {
    const { order: { id }, getOrder } = this.props;
    getOrder(id);
  }

  onBack =() => {
    this.props.navigator.pop();
  }

  onCloseModal = () => {
    this.props.navigator.dismissModal();
  }

  onToggleChangeStatus = (delivered) => {
    delivered ? this.onChangeOrderStatus(delivered, null) :
      this.props.navigator.showModal({
        screen: NOT_DELIVERED_REASONS_MODAL_SCREEN,
        passProps: {
          title: translate('ORDERS_GROUP.modalTitle'),
          placeholder: translate('ORDERS_GROUP.modalPlaceholder'),
          onSave: this.onChangeOrderStatus,
          onBack: this.onCloseModal,
          buttonText: translate('ORDERS_GROUP.confirmNotDeliveredButton')
        }
      });
  }

  onChangeOrderStatus = (delivered, notDeliveredReasons) => {
    const { order: { id: orderId } } = this.props;
    const { id, group, setOrderStatus, orderStatus } = this.props;
    setOrderStatus(id, group, orderId, orderStatus, delivered, notDeliveredReasons);
    !delivered && this.onCloseModal();
    this.onBack();
  }

  render() {
    const {
      group,
      order,
      currentOrder: {
        order: { id, shop, variants } = {},
        consumer
      },
      loading,
      disabled
    } = this.props;
    const height = disabled ? scrollHeight + footerHeight : scrollHeight;

    return (
      <View style={styles.container}>
        <OrdersDetailHeader
          height={headerHeight}
          onBack={this.onBack}
          group={group}
          order={order}
        />
        <ScrollView style={[styles.scroll, { height }]}>
          {loading ?
            <ActivityIndicator style={styles.activity} size="small" />
            : <View style={styles.scrollContent}>
              {Boolean(id) &&
                <ProductList
                  grocery={shop}
                  products={variants}
                  consumer={consumer}
                  order={order}
                />
              }
            </View>
          }
        </ScrollView>
        {!disabled &&
          <OrdersDetailFooter
            height={footerHeight}
            setOrderStatus={this.onToggleChangeStatus}
          />
        }
      </View>
    );
  }
}

OrderDetailScreen.navigatorStyle = {
  navBarHidden: true
};

OrderDetailScreen.propTypes = {
  navigator: object.isRequired,
  id: string.isRequired,
  group: object.isRequired,
  order: object.isRequired,
  currentOrder: object.isRequired,
  getOrder: func.isRequired,
  setOrderStatus: func.isRequired,
  loading: bool.isRequired,
  disabled: bool,
  orderStatus: string,
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS(),
  loading: state.getIn(['orders', 'ordersLoading']),
  currentOrder: state.getIn(['orders', 'currentOrder']).toJS()
});

const mapDispatch = ({
  getOrder,
  setOrderStatus,
});

export default connect(mapState, mapDispatch)(OrderDetailScreen);
