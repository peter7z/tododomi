import { SubmissionError } from 'redux-form';
import { sessionService } from 'redux-react-native-session';

import userApi from 'api/userApi';
import * as types from './actionTypes';

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const login = deliverer =>
  async (dispatch) => {
    try {
      const response = await userApi.login({ deliverer });
      await sessionService.saveUser(response.deliverer);
      dispatch(loginSuccess());
    } catch (err) {
      throw new SubmissionError({
        _error: err.error,
      });
    }
  };

export const logout = () =>
  async (dispatch) => {
    try {
      await userApi.logout();
      sessionService.deleteSession();
      sessionService.deleteUser();
      dispatch(logoutSuccess());
    } catch (err) {
      throw err;
    }
  };

export const toggleReception = () =>
  async () => {
    const { active, ...deliverer } = await sessionService.loadUser();
    const { deliverer: user } = await userApi.update({ ...deliverer, active: !active });
    sessionService.saveUser(user);
  };

export const changePassword = passwordData =>
  async () => {
    try {
      await userApi.changePassword(passwordData);
    } catch ({ error, errors }) {
      throw new SubmissionError({
        _error: error || (errors && errors.fullMessages[0])
      });
    }
  };
