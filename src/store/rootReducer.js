import { combineReducers } from 'redux';

import cart from './modules/cart/reducer';

const rootReducer = combineReducers({
  cart,
});

export default rootReducer;
