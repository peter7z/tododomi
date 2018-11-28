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

export const getUserOrdersGroup = () => ({
  type: types.GET_ORDERS_GROUP
});

export const getOrdersGroupSuccess = ordersGroups => ({
  type: types.GET_ORDERS_GROUP_SUCCESS,
  ordersGroups,
});

export const getOrdersGroupFail = errors => ({
  type: types.GET_ORDERS_GROUP_FAIL,
  errors
});

export const startUserOrdersGroup = () => ({
  type: types.START_ORDERS_GROUP
});

export const startOrdersGroupSuccess = () => ({
  type: types.START_ORDERS_GROUP_SUCCESS
});

export const startOrdersGroupFail = errors => ({
  type: types.START_ORDERS_GROUP_FAIL,
  errors
});

export const setUserOrderStatus = () => ({
  type: types.SET_ORDER_STATUS
});

export const setOrderStatusSuccess = (id, delivered) => ({
  type: types.SET_ORDER_STATUS_SUCCESS,
  id,
  delivered,
});

export const setOrderStatusFail = errors => ({
  type: types.SET_ORDER_STATUS_FAIL,
  errors
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

export const getOrdersGroup = orderIds =>
  async (dispatch) => {
    dispatch(getUserOrdersGroup());
    try {
      const { readyToDeliver, orders } = await ordersApi.getOrdersGroup(orderIds);
      dispatch(getOrdersGroupSuccess({ readyToDeliver, orders }));
    } catch (errors) {
      dispatch(getOrdersGroupFail(errors));
    }
  };

export const startOrdersGroup = orderIds =>
  async (dispatch) => {
    dispatch(startUserOrdersGroup());
    try {
      await ordersApi.startOrdersGroup(orderIds);
      dispatch(startOrdersGroupSuccess());
    } catch (errors) {
      dispatch(startOrdersGroupFail(errors));
    }
  };

export const setOrderStatus = (id, delivered) =>
  async (dispatch) => {
    dispatch(setUserOrderStatus());
    try {
      await ordersApi.setOrderStatus(id, delivered);
      dispatch(setOrderStatusSuccess(id, delivered));
    } catch (errors) {
      dispatch(setOrderStatusFail(errors));
    }
  };
