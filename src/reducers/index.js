import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import { sessionImmutableReducer as session } from 'redux-react-native-session';
import { ordersReducer as orders } from './ordersReducer';

const AppReducer = combineReducers({
  form,
  session,
  orders
});

export default AppReducer;
