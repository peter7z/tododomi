import { applyQueryParams } from 'utils/helpers';
import api from './apiService';

class Order {
  static getOrders() {
    return api.get('/deliverers/orders');
  }

  static getOrdersGroup(orderIds) {
    return api.get(applyQueryParams('/deliverers/orders/range', { orderIds }));
  }
}

export default Order;
