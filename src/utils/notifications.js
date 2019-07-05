import OneSignal from 'react-native-onesignal';
import Config from 'react-native-config';

let notificationPlayerId;

export const getNotificationPlayerId = () => notificationPlayerId;

export const onIds = (device) => {
  if (device) notificationPlayerId = device.userId;
};

export const initNotifications = (onReceived, onOpened) => {
  debugger;
  OneSignal.setLogLevel(6, 0);

  OneSignal.setRequiresUserPrivacyConsent(false);

  OneSignal.init(Config.ONESIGNAL_APP_ID, { kOSSettingsKeyAutoPrompt: true });

  OneSignal.addEventListener('received', onReceived);
  OneSignal.addEventListener('opened', onOpened);
  OneSignal.addEventListener('ids', onIds);
  OneSignal.configure(); // triggers the ids event
};

export const cleanNotifications = () => {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
};
