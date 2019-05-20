import { Dimensions, Platform, Linking } from 'react-native';
import queryString from 'query-string';
import humps from 'humps';

import translate from 'utils/i18n';
import { iPhoneXHeight } from 'constants/styleConstants';
import { IOS_GOOGLE_MAPS, ANDROID_GOOGLE_MAPS, IOS_MAPS } from 'constants/appConstants';

export const applyQueryParams = (url, params) => {
  const queryParams = queryString.stringify(humps.decamelizeKeys(params), { arrayFormat: 'bracket' });
  return `${url}?${queryParams}`;
};

export const onIPhoneX = () => {
  const { height } = Dimensions.get('window');
  return Platform.OS === 'ios' && height === iPhoneXHeight;
};

export const capitalize = text => text.charAt(0).toUpperCase() + text.slice(1);

export const subOrdersGroup = group => Object.entries(group).map(([, value]) => ({
  ...value,
  isCollapsed: false,
}));

export const ordersGroupsToArray = ordersGroups => Object.entries(ordersGroups).map(([key, value]) => ({
  id: key,
  day: translate(`ORDERS.${key}`),
  groups: subOrdersGroup(value),
  isCollapsed: false,
}));

export const openMapAndDriveTo = async (latitude, longitude) => {
  const coordinates = `${latitude},${longitude}`;
  let protocol;
  if (Platform.OS === 'ios') {
    const canOpenUrl = await Linking.canOpenURL(`${IOS_GOOGLE_MAPS}${coordinates}`);
    protocol = canOpenUrl ? IOS_GOOGLE_MAPS : IOS_MAPS;
  } else protocol = ANDROID_GOOGLE_MAPS;
  Linking.openURL(protocol + coordinates);
};

export const callTo = phone => Linking.openURL(`tel:${phone}`);
