import { combineReducers } from 'redux';
import restaurant from './RestaurantReducer/RestaurantReducer';
import cart from './CartReducer/CartReducer';
import order from './OrderReducer/OrderReducer';
export default combineReducers({
  restaurant,
  cart,
  order,
});
