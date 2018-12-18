import Immutable from 'immutable';

import * as types from 'actions/actionTypes';

export const initialState = Immutable.Map({
  ordersLoading: false,
  ordersGroupLoading: false,
  startGroupLoading: false,
  setOrderLoading: false,
  ordersGroups: Immutable.List(),
  ordersGroup: Immutable.Map(),
  currentOrder: Immutable.Map()
});

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDERS:
    case types.GET_ORDER: {
      return state.set('ordersLoading', true);
    }

    case types.GET_ORDERS_SUCCESS: {
      const { ordersGroups } = action;
      const newState = state.set('ordersLoading', false);
      return newState.set('ordersGroups', Immutable.fromJS(ordersGroups));
    }

    case types.GET_ORDER_SUCCESS: {
      const { order } = action;
      const newState = state.set('ordersLoading', false);
      return newState.set('currentOrder', Immutable.fromJS(order));
    }

    case types.GET_ORDERS_FAIL:
    case types.GET_ORDER_FAIL: {
      return state.set('ordersLoading', false);
    }

    case types.SET_ORDERS: {
      const { ordersGroups } = action;
      return state.set('ordersGroups', Immutable.fromJS(ordersGroups));
    }

    case types.GET_ORDERS_GROUP: {
      return state.set('ordersGroupLoading', true);
    }

    case types.GET_ORDERS_GROUP_SUCCESS: {
      const { ordersGroups } = action;
      const newState = state.set('ordersGroupLoading', false);
      return newState.set('ordersGroup', Immutable.fromJS(ordersGroups));
    }

    case types.GET_ORDERS_GROUP_FAIL: {
      return state.set('ordersGroupLoading', false);
    }

    case types.START_ORDERS_GROUP: {
      return state.set('startGroupLoading', true);
    }

    case types.START_ORDERS_GROUP_SUCCESS: {
      const { id, group: { grocery: { name }, deliveryTime } } = action;

      const ordersGroups = state.get('ordersGroups').toJS();
      ordersGroups
        .find(oGroup => oGroup.id === id)
        .groups
        .find(group => group.deliveryTime === deliveryTime && group.grocery.name === name)
        .active = true;

      let newState = state.set('ordersGroups', Immutable.fromJS(ordersGroups));
      newState = newState.setIn(['ordersGroup', 'readyToDeliver'], true);
      return newState.set('startGroupLoading', false);
    }

    case types.START_ORDERS_GROUP_FAIL: {
      return state.set('startGroupLoading', false);
    }

    case types.SET_ORDER_STATUS: {
      return state.set('setOrderLoading', true);
    }

    case types.SET_ORDER_STATUS_SUCCESS: {
      const {
        id,
        group: { grocery: { name }, deliveryTime, ordersCount },
        orderId,
        delivered
      } = action;
      let isDelivered;

      let orders = state.getIn(['ordersGroup', 'orders']);
      orders = orders.update(
        orders.findIndex(item => item.get('id') === orderId),
        (item) => {
          isDelivered = item.get('delivered');
          return item.set('delivered', delivered);
        }
      );
      let newState = state.setIn(['ordersGroup', 'orders'], orders);

      if (isDelivered === null) {
        const ordersGroups = state.get('ordersGroups').toJS();
        const group = ordersGroups
          .find(oGroup => oGroup.id === id)
          .groups
          .find(group => group.deliveryTime === deliveryTime && group.grocery.name === name);
        group.completedOrdersCount += 1;
        group.active = ordersCount !== group.completedOrdersCount;
        newState = newState.set('ordersGroups', Immutable.fromJS(ordersGroups));
      }

      return newState.set('setOrderLoading', false);
    }

    case types.SET_ORDER_STATUS_FAIL: {
      return state.set('setOrderLoading', false);
    }

    default: {
      return state;
    }
  }
};
