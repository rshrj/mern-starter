import { combineReducers } from 'redux';

import iceCreamReducer from './iceCreamReducer';

export default combineReducers({
  iceCream: iceCreamReducer
});
