import api from './apiService';

class Order {
  static getOrders() {
    return api.get('/deliverers/orders');
  }
}

export default Order;
