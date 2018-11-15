import { Navigation } from 'react-native-navigation';

import LoginScreen from 'containers/LoginScreen';
import MainScreen from 'containers/MainScreen';
import ProfileScreen from 'containers/ProfileScreen';
import ChangePasswordScreen from 'containers/ChangePasswordScreen';

export const LOGIN_SCREEN = 'tododomishopper.LoginScreen';
export const MAIN_SCREEN = 'tododomishopper.MainScreen';
export const PROFILE_SCREEN = 'tododomishopper.ProfileScreen';
export const CHANGE_PASSWORD_SCREEN = 'tododomishopper.ChangePasswordScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(LOGIN_SCREEN, () => LoginScreen, store, Provider);
  Navigation.registerComponent(MAIN_SCREEN, () => MainScreen, store, Provider);
  Navigation.registerComponent(PROFILE_SCREEN, () => ProfileScreen, store, Provider);
  Navigation.registerComponent(CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, store, Provider);
};

export default registerScreens;
