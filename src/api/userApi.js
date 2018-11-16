import api from './apiService';

class Session {
  static login(deliverer) {
    return api.post('/deliverers/sign_in', deliverer);
  }

  static logout() {
    return api.delete('/deliverers/sign_out');
  }

  static changePassword(passwordData) {
    return api.put('/deliverers/password', passwordData);
  }
}

export default Session;
