import { applyQueryParams } from 'utils/helpers';
import api from './apiService';

class Order {
  static getOrders() {
    return api.get('/deliverers/orders');
  }

  static getOrdersGroup(orderIds) {
    return api.get(applyQueryParams('/deliverers/orders/range', { orderIds }));
  }

  static startOrdersGroup(orderIds) {
    return api.put(applyQueryParams('/deliverers/orders/start_delivery', { orderIds }));
  }

  static setOrderStatus(id, delivered, notDeliveredReasons) {
    return api.put(`/deliverers/orders/${id}`, { order: delivered ?
      { delivered } :
      { delivered, not_delivered_reason: notDeliveredReasons } });
  }

  static getOrder(id) {
    return api.get(`/deliverers/orders/${id}`);
  }
}

export default Order;
