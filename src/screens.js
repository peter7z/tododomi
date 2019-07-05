import { Navigation } from 'react-native-navigation';

import * as screens from 'constants/screenConstants';

import LoginScreen from 'containers/LoginScreen';
import DashboardScreen from 'containers/DashboardScreen';
import ProfileScreen from 'containers/ProfileScreen';
import OrderDetailScreen from 'containers/OrderDetailScreen';
import ChangePasswordScreen from 'containers/ChangePasswordScreen';
import OrdersGroupScreen from 'containers/OrdersGroupScreen';
import NotDeliveredReasonsModal from 'components/Orders/NotDeliveredReasonsModal';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent(screens.LOGIN_SCREEN, () => LoginScreen, store, Provider);
  Navigation.registerComponent(screens.DASHBOARD_SCREEN, () => DashboardScreen, store, Provider);
  Navigation.registerComponent(screens.PROFILE_SCREEN, () => ProfileScreen, store, Provider);
  Navigation.registerComponent(screens.ORDER_DETAIL_SCREEN, () => OrderDetailScreen, store, Provider);
  Navigation.registerComponent(screens.CHANGE_PASSWORD_SCREEN, () => ChangePasswordScreen, store, Provider);
  Navigation.registerComponent(screens.ORDERS_GROUP_SCREEN, () => OrdersGroupScreen, store, Provider);
  Navigation.registerComponent(screens.NOT_DELIVERED_REASONS_MODAL_SCREEN, () => NotDeliveredReasonsModal, store, Provider);
};

export default registerScreens;
