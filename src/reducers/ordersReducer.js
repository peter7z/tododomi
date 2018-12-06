import Immutable from 'immutable';

import * as types from 'actions/actionTypes';

export const initialState = Immutable.Map({
  ordersLoading: false,
  ordersGroupLoading: false,
  startGroupLoading: false,
  setOrderLoading: false,
  ordersGroups: Immutable.List(),
  ordersGroup: Immutable.Map(),
});

export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDERS: {
      return state.set('ordersLoading', true);
    }

    case types.GET_ORDERS_SUCCESS: {
      const { ordersGroups } = action;
      const newState = state.set('ordersLoading', false);
      return newState.set('ordersGroups', Immutable.fromJS(ordersGroups));
    }

    case types.GET_ORDERS_FAIL: {
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
      const newState = state.setIn(['ordersGroup', 'readyToDeliver'], true);
      return newState.set('startGroupLoading', false);
    }

    case types.START_ORDERS_GROUP_FAIL: {
      return state.set('startGroupLoading', false);
    }

    case types.SET_ORDER_STATUS: {
      return state.set('setOrderLoading', true);
    }

    case types.SET_ORDER_STATUS_SUCCESS: {
      const { id, delivered } = action;
      let orders = state.getIn(['ordersGroup', 'orders']);
      orders = orders.update(
        orders.findIndex(item => item.get('id') === id), item => item.set('delivered', delivered)
      );
      const newState = state.setIn(['ordersGroup', 'orders'], orders);
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
