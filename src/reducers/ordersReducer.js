import Immutable from 'immutable';

import * as types from 'actions/actionTypes';

export const initialState = Immutable.Map({
  ordersLoading: false,
  ordersGroups: Immutable.List(),
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

    default: {
      return state;
    }
  }
};
