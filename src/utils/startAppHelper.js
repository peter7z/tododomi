import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen';
import { LOGIN_SCREEN, DASHBOARD_SCREEN } from 'constants/screenConstants';

export const startAuthenticatedApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: DASHBOARD_SCREEN
    }
  });
};

export const startApp = (authenticated) => {
  if (authenticated) {
    startAuthenticatedApp();
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
    session.authenticated ?
      Navigation.startSingleScreenApp({
        screen: {
          screen: DASHBOARD_SCREEN,
        },
      })
      :
      startApp(session.authenticated);

    SplashScreen.hide();
  }
};
