import { DASHBOARD_SCREEN, ORDER_DETAIL_SCREEN } from 'constants/screenConstants';

export const IOS_MAPS = 'https://maps.apple.com/?dirflg=d&daddr=';
export const IOS_GOOGLE_MAPS = 'comgooglemaps:///maps?travelmode=driving&daddr=';
export const ANDROID_GOOGLE_MAPS = 'https://google.com/maps?travelmode=driving&daddr=';
export const TODAY_ID = 'today';
export const TOMORROW_ID = 'tomorrow';
export const ORDER_ACTIVE_STATUS = 'active';
export const ORDER_INACTIVE_STATUS = 'inactive';
export const ORDER_FINISHED_STATUS = 'finished';

// Notification codes
export const notificationCodeToScreen = [
  DASHBOARD_SCREEN,
  DASHBOARD_SCREEN,
  DASHBOARD_SCREEN,
  DASHBOARD_SCREEN,
  DASHBOARD_SCREEN,
  DASHBOARD_SCREEN,
  DASHBOARD_SCREEN,
  ORDER_DETAIL_SCREEN,
];
