import { Dimensions, Platform } from 'react-native';
import queryString from 'query-string';

import translate from 'utils/i18n';
import { iPhoneXHeight } from 'constants/styleConstants';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(params);
  return `${url}?${queryParams}`;
};

export const onIPhoneX = () => {
  const { height } = Dimensions.get('window');
  return Platform.OS === 'ios' && height === iPhoneXHeight;
};

export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

export const ordersGroupsToArray = ordersGroups => Object.entries(ordersGroups).map(([key, value]) => ({ day: translate(`ORDERS.${key}`), groups: value, isCollapsed: false }));
