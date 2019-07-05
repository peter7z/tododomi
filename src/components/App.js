import { Provider } from 'react-redux';
import Immutable from 'immutable';
import { sessionService } from 'redux-react-native-session';
import { startApp, handleDeepLink } from 'utils/startAppHelper';
import { initNotifications } from 'utils/notifications';
import configureStore from 'store/configureStore';
import registerScreens from '../screens';

const store = configureStore(Immutable.Map());
registerScreens(store, Provider);

class App {
  constructor() {
    this.appInitialized = false;
    this.authenticated = false;
    sessionService.initSessionService(store);

    initNotifications(this.onNotificationReceived, this.onNotificationOpened);

    store.subscribe(this.onStoreUpdate.bind(this));
  }

  onNotificationReceived = () => {
  };

  onNotificationOpened = (event) => {
    const session = store.getState().get('session');
    const authenticated = session.get('authenticated');
    const user = session.get('user');
    handleDeepLink(event, { authenticated, user });
  };

  onStoreUpdate() {
    const session = store.getState().get('session');
    const authenticated = session.get('authenticated');
    const user = session.get('user');
    const shouldUpdate = this.authenticated !== authenticated && (!authenticated || !user.isEmpty());
    if (!this.appInitialized) {
      const checked = session.get('userChecked');
      if (checked) {
        this.appInitialized = true;
        this.authenticated = authenticated;
        startApp(authenticated);
      }
    } else if (shouldUpdate) {
      this.authenticated = authenticated;
      startApp(authenticated);
    }
  }
}

export default App;
