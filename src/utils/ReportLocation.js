import { Alert } from 'react-native';
import BackgroundGeolocation from '@mauron85/react-native-background-geolocation';
import ActionCable from 'utils/actionCable';
import { applyQueryParams } from 'utils/helpers';
import Config from 'react-native-config';
import translate from 'utils/i18n';

class ReportLocation {
  constructor({ uid, ordersGroupId }) {
    const cable = ActionCable.createConsumer(applyQueryParams(Config.CABLE_URL, {
      uid,
    }));
    this.subscription = cable.subscriptions.create(
      { channel: 'OrdersGroupChannel', orders_group_id: ordersGroupId },
      {},
    );

    BackgroundGeolocation.configure({
      startForeground: true,
      distanceFilter: 20,
      debug: false,
    });

    BackgroundGeolocation.on('location', (location) => {
      this.subscription.perform('update_location', { location });
    });

    BackgroundGeolocation.on('authorization', (status) => {
      if (status !== BackgroundGeolocation.AUTHORIZED) {
        setTimeout(() =>
          Alert.alert(translate('LOCALIZATION_AUTHORIZATION.requires'), 'LOCALIZATION_AUTHORIZATION.prompt', [
            { text: translate('LOCALIZATION_AUTHORIZATION.yes'), onPress: () => BackgroundGeolocation.showAppSettings() },
            { text: translate('LOCALIZATION_AUTHORIZATION.no'), onPress: () => false, style: 'cancel' }
          ]), 1000);
      }
    });
  }

  startTracking = () => BackgroundGeolocation.start();

  stopTracking = () => BackgroundGeolocation.stop()
}

export default ReportLocation;
