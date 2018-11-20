import { Navigation } from 'react-native-navigation';

import LoginScreen from 'containers/LoginScreen';
import DashboardScreen from 'containers/DashboardScreen';
import ProfileScreen from 'containers/ProfileScreen';
import ChangePasswordScreen from 'containers/ChangePasswordScreen';

export const LOGIN_SCREEN = 'tododomishopper.LoginScreen';
export const DASHBOARD_SCREEN = 'tododomishopper.DashboardScreen';
export const PROFILE_SCREEN = 'tododomishopper.ProfileScreen';
export const CHANGE_PASSWORD_SCREEN = 'tododomishopper.ChangePasswordScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(LOGIN_SCREEN, () => LoginScreen, store, Provider);
  Navigation.registerComponent(DASHBOARD_SCREEN, () => DashboardScreen, store, Provider);
  Navigation.registerComponent(PROFILE_SCREEN, () => ProfileScreen, store, Provider);
  Navigation.registerComponent(CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, store, Provider);
};

export default registerScreens;
