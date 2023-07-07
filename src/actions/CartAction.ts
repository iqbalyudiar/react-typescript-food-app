import { ADD_TO_CART } from '@/constant/redux/types';
import { Dispatch } from 'redux';

export const addToCart: any = (food: any, restaurant: any) => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: ADD_TO_CART,
    payload: { food, restaurant },
  });
};
