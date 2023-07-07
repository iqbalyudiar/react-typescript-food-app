import { ADD_TO_CART } from '@/constant/redux/types';

const initialState = {
  cartItems: [],
  restaurant: {},
};
export default (state = initialState, action: any) => {
  const found = state.cartItems.some(
    (cart: any) => cart.id === action?.payload?.food?.id,
  );
  switch (action.type) {
    case ADD_TO_CART:
      if (found) {
        const data = state.cartItems.map((cart: any) =>
          cart.id === action.payload.food.id
            ? { ...cart, quantity: cart.quantity + 1 }
            : cart,
        );
        return { ...state, cartItems: data };
      }

      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          ...[{ ...action.payload.food, quantity: 1 }],
        ],
        restaurant: action.payload.restaurant,
      };
    default:
      return state;
  }
};
