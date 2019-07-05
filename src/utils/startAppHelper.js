import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import humps from 'humps';
import { LOGIN_SCREEN, DASHBOARD_SCREEN } from 'constants/screenConstants';
import { notificationCodeToScreen } from 'constants/appConstants';

export const startAuthenticatedApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: DASHBOARD_SCREEN
    }
  });
}

export const startApp = (authenticated) => {
  if (authenticated) {
    this.startAuthenticatedApp();
  } else {
    Navigation.startSingleScreenApp({
      screen: {
        screen: LOGIN_SCREEN
      }
    });
  }

  SplashScreen.hide();
}

export const handleDeepLink = (event, session) => {
  const action = event && event.action;
  const inFocus = event && event.notification.isAppInFocus;
  if (!inFocus || action.actionID) {
    let props;
    event && event.notification && event.notification.payload &&
      (props = humps.camelizeKeys(event.notification.payload.additionalData));
    props.orderId = parseInt(props.orderId, 10);
    const screen = props.code ? notificationCodeToScreen[props.code] : DASHBOARD_SCREEN;
    session.authenticated ?
      Navigation.startSingleScreenApp({
        screen: {
          screen,
        },
        passProps: {
          backToRoot: true,
          ...props,
        },
      })
      :
      startApp(session.authenticated);

    SplashScreen.hide();
  }
};
