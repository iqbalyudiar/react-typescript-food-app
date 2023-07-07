import { ADD_TO_CART, REMOVE_FROM_CART } from '@/constant/redux/types';
import { Dispatch } from 'redux';

export const addToCart: any = (food: any, restaurant: any) => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { food, restaurant },
  });
};

export const removeFromCart: any = (id: string | number) => async (
  dispatch: Dispatch,
) => {
  const food = { id };
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { food },
  });
};
