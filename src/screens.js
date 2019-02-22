import { Navigation } from 'react-native-navigation';

import LoginScreen from 'containers/LoginScreen';
import DashboardScreen from 'containers/DashboardScreen';
import ProfileScreen from 'containers/ProfileScreen';
import OrderDetailScreen from 'containers/OrderDetailScreen';
import ChangePasswordScreen from 'containers/ChangePasswordScreen';
import OrdersGroupScreen from 'containers/OrdersGroupScreen';
import NotDeliveredReasonsModal from 'components/Orders/NotDeliveredReasonsModal';

export const LOGIN_SCREEN = 'tododomishopper.LoginScreen';
export const DASHBOARD_SCREEN = 'tododomishopper.DashboardScreen';
export const PROFILE_SCREEN = 'tododomishopper.ProfileScreen';
export const ORDER_DETAIL_SCREEN = 'tododomishopper.OrderDetailScreen';
export const CHANGE_PASSWORD_SCREEN = 'tododomishopper.ChangePasswordScreen';
export const ORDERS_GROUP_SCREEN = 'tododomishopper.OrdersGroupScreen';
export const NOT_DELIVERED_REASONS_MODAL_SCREEN = 'tododomishopper.Modal';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(LOGIN_SCREEN, () => LoginScreen, store, Provider);
  Navigation.registerComponent(DASHBOARD_SCREEN, () => DashboardScreen, store, Provider);
  Navigation.registerComponent(PROFILE_SCREEN, () => ProfileScreen, store, Provider);
  Navigation.registerComponent(ORDER_DETAIL_SCREEN, () => OrderDetailScreen, store, Provider);
  Navigation.registerComponent(CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, store, Provider);
  Navigation.registerComponent(ORDERS_GROUP_SCREEN, () => OrdersGroupScreen, store, Provider);
  Navigation.registerComponent(NOT_DELIVERED_REASONS_MODAL_SCREEN, () => NotDeliveredReasonsModal, store, Provider);
};

export default registerScreens;
