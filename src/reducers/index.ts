import { combineReducers } from 'redux';
import restaurant from './RestaurantReducer/RestaurantReducer';
import cart from './CartReducer/CartReducer';
export default combineReducers({
  restaurant,
  cart,
});
