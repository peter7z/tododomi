import ordersApi from 'api/ordersApi';
import { ordersGroupsToArray } from 'utils/helpers';

import * as types from './actionTypes';

export const getUserOrders = () => ({
  type: types.GET_ORDERS
});

export const getOrdersSuccess = ordersGroups => ({
  type: types.GET_ORDERS_SUCCESS,
  ordersGroups,
});

export const getOrdersFail = errors => ({
  type: types.GET_ORDERS_FAIL,
  errors
});

export const setOrders = ordersGroups => ({
  type: types.SET_ORDERS,
  ordersGroups,
});

export const getOrders = () =>
  async (dispatch) => {
    dispatch(getUserOrders());
    try {
      const ordersGroups = await ordersApi.getOrders();
      dispatch(getOrdersSuccess(ordersGroupsToArray(ordersGroups)));
    } catch (errors) {
      dispatch(getOrdersFail(errors));
    }
  };
