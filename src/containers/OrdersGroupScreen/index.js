import React from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { object, func, bool, string } from 'prop-types';

import translate from 'utils/i18n';
import OrdersHeader from 'components/Orders/OrdersHeader';
import OrdersRowHeader from 'components/Orders/OrdersRowHeader';
import OrdersRow from 'components/Orders/OrdersRow';
import ChangeOrderStatusDialog from 'components/Orders/ChangeOrderStatusDialog';
import ReportLocation from 'utils/ReportLocation';
import { getOrdersGroup, startOrdersGroup, setOrderStatus } from 'actions/orderActions';
import { ORDER_DETAIL_SCREEN, NOT_DELIVERED_REASONS_MODAL_SCREEN, DASHBOARD_SCREEN } from 'constants/screenConstants';
import styles from './styles';

class OrdersGroupScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      changingId: 0,
      showConfirmDialog: false,
      currentOrderId: 0
    };
  }

  componentDidMount = () => {
    const { uid, getOrdersGroup, group: { ordersGroupId } } = this.props;
    getOrdersGroup(ordersGroupId);
    this.ReportLocation = new ReportLocation({ uid, ordersGroupId });
    this.ReportLocation.startTracking();
  }

  onBack = () => {
    const { navigator } = this.props;
    navigator.resetTo({
      screen: DASHBOARD_SCREEN,
    });
  }

  onCloseModal = () => {
    this.props.navigator.dismissModal();
  }

  onToggleCloseDialog = () => {
    const { showConfirmDialog } = this.state;
    this.setState({ showConfirmDialog: !showConfirmDialog });
  }

  onToggleChangeStatus = (orderId) => {
    const { showConfirmDialog } = this.state;
    this.setState(
      {
        showConfirmDialog: !showConfirmDialog,
        currentOrderId: orderId,
      });
  }

  onGroupStart = () => {
    const { id, startGroup, group, orderStatus } = this.props;
    startGroup(id, group, group.ordersGroupId, orderStatus);
  }

  onEnterOrder = (group, order) => {
    const { id, navigator, disabled, orderStatus } = this.props;
    navigator.push({
      screen: ORDER_DETAIL_SCREEN,
      passProps: { id, group, order, orderStatus, disabled }
    });
  }

  onChangeOrderStatus = (delivered, notDeliveredReasons) => {
    const {
      currentOrderId,
      changingId,
      showConfirmDialog
    } = this.state;
    if (!changingId) {
      this.setState(
        { changingId: currentOrderId },
        async () => {
          const { id, group, setOrderStatus, orderStatus } = this.props;
          await setOrderStatus(id, group, currentOrderId, orderStatus, delivered, notDeliveredReasons);
          this.setState(
            {
              changingId: 0,
              showConfirmDialog: !showConfirmDialog
            }
          );
          this.onCloseModal();
        });
    }
  }

  onNotDelivered = () => {
    this.props.navigator.showModal({
      screen: NOT_DELIVERED_REASONS_MODAL_SCREEN,
      passProps: {
        title: translate('ORDERS_GROUP.modalTitle'),
        placeholder: translate('ORDERS_GROUP.modalPlaceholder'),
        onSave: this.onChangeOrderStatus,
        onBack: this.onCloseModal,
        buttonText: translate('ORDERS_GROUP.confirmNotDeliveredButton'),
      }
    });
  }

  render() {
    const {
      group,
      group: { shop },
      ordersGroup: { readyToDeliver, orders },
      loading,
      startLoading,
      statusLoading,
      disabled,
    } = this.props;
    const { changingId, showConfirmDialog } = this.state;
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
                    bags={orders.length}
                    grocery={shop}
                    onGroupStart={this.onGroupStart}
                    readyToDeliver={readyToDeliver}
                    startLoading={startLoading}
                    disabled={disabled}
                  />
                  {orders.slice(0, orders.length).map((order, index) =>
                    <OrdersRow
                      key={order.id}
                      order={order}
                      onChangeOrderStatus={this.onToggleChangeStatus}
                      onEnterOrder={() => this.onEnterOrder(group, order)}
                      loading={changingId === order.id && statusLoading}
                      disabled={disabled || !readyToDeliver}
                      last={(index == orders.length - 1)}
                    />
                  )}
                </View>
              )
            }
          </View>
        </ScrollView>
        {showConfirmDialog &&
          <ChangeOrderStatusDialog
            onNotDelivered={this.onNotDelivered}
            onDelivered={() => this.onChangeOrderStatus(true, null)}
            onClose={this.onToggleCloseDialog}
          />
        }
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
  uid: string.isRequired,
  group: object.isRequired,
  ordersGroup: object.isRequired,
  getOrdersGroup: func.isRequired,
  loading: bool.isRequired,
  startGroup: func.isRequired,
  startLoading: bool.isRequired,
  setOrderStatus: func.isRequired,
  statusLoading: bool.isRequired,
  disabled: bool.isRequired,
  orderStatus: string,
};

const mapState = state => ({
  loading: state.getIn(['orders', 'ordersGroupLoading']),
  startLoading: state.getIn(['orders', 'startGroupLoading']),
  statusLoading: state.getIn(['orders', 'setOrderLoading']),
  ordersGroup: state.getIn(['orders', 'ordersGroup']).toJS(),
  uid: state.getIn(['session', 'user', 'uid']),
});

const mapDispatch = ({
  getOrdersGroup,
  startGroup: startOrdersGroup,
  setOrderStatus,
});

export default connect(mapState, mapDispatch)(OrdersGroupScreen);
