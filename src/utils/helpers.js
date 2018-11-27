import { Dimensions, Platform, Linking } from 'react-native';
import queryString from 'query-string';
import humps from 'humps';

import translate from 'utils/i18n';
import { iPhoneXHeight } from 'constants/styleConstants';
import { IOS_ROUTE_MAP, ANDROID_ROUTE_MAP } from 'constants/appConstants';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(humps.decamelizeKeys(params), { arrayFormat: 'bracket' });
  return `${url}?${queryParams}`;
};

export const onIPhoneX = () => {
  const { height } = Dimensions.get('window');
  return Platform.OS === 'ios' && height === iPhoneXHeight;
};

export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

export const ordersGroupsToArray = ordersGroups => Object.entries(ordersGroups).map(([key, value]) => ({ day: translate(`ORDERS.${key}`), groups: value, isCollapsed: false }));

export const openMapAndDriveTo = (latitude, longitude) => {
  const mapUrl = Platform.OS === 'ios' ? IOS_ROUTE_MAP : ANDROID_ROUTE_MAP;
  Linking.openURL(`${mapUrl}${latitude},${longitude}`);
};
