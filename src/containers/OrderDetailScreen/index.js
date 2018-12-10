import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { bool, object, func } from 'prop-types';

import ProductList from 'components/Product/ProductList';
import { getOrder, setOrderStatus } from 'actions/orderActions';
import OrdersDetailHeader from 'components/Orders/OrdersDetailHeader';
import OrdersDetailFooter from 'components/Orders/OrdersDetailFooter';

import {
  headerHeight,
  scrollHeight,
  footerHeight,
  styles
} from './styles';

class OrderDetailScreen extends Component {
  constructor() {
    super();

    this.isChanging = false;

    this.onChangeOrderStatus = this.onChangeOrderStatus.bind(this);
    this.onBack = this.onBack.bind(this);
  }
  componentDidMount() {
    const { order: { id }, getOrder } = this.props;
    getOrder(id);
  }

  onBack() {
    this.props.navigator.pop();
  }

  onChangeOrderStatus(id, delivered) {
    if (!this.isChanging) {
      this.isChanging = true;
      this.setState(
        { changingId: id },
        () => this.props.setOrderStatus(id, delivered)
          .then(() => {
            this.isChanging = false;
            this.onBack();
          }));
    }
  }

  render() {
    const {
      group,
      order,
      currentOrder: {
        order: { id, grocery, variants } = {},
        consumer
      },
      loading,
      disabled
    } = this.props;

    return (
      <View>
        <OrdersDetailHeader
          height={headerHeight}
          onBack={this.onBack}
          group={group}
          order={order}
        />
        <ScrollView style={[styles.scroll, {
          height: disabled
            ? scrollHeight + footerHeight
            : scrollHeight
        }]}
        >
          {loading ?
            <ActivityIndicator style={styles.activity} size="small" />
            : <View style={styles.scrollContent}>
              {Boolean(id) &&
                <ProductList
                  grocery={grocery}
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
            order={order}
            setOrderStatus={this.onChangeOrderStatus}
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
  group: object.isRequired,
  order: object.isRequired,
  currentOrder: object.isRequired,
  getOrder: func.isRequired,
  setOrderStatus: func.isRequired,
  loading: bool.isRequired,
  disabled: bool
};

const mapState = state => ({
  user: state.getIn(['session', 'user']).toJS(),
  loading: state.getIn(['orders', 'ordersLoading']),
  currentOrder: state.getIn(['orders', 'currentOrder']).toJS()
});

const mapDispatch = dispatch => ({
  getOrder: id => dispatch(getOrder(id)),
  setOrderStatus: (id, delivered) => dispatch(setOrderStatus(id, delivered)),
});

export default connect(mapState, mapDispatch)(OrderDetailScreen);
