import api from '@/utils/api';
import { FETCH_ORDERS } from '@/constant/redux/types';
import { Dispatch } from 'redux';

export const fetchOrders: any = () => async (dispatch: Dispatch) => {
  const res = await api.get('/orders');

  dispatch({
    type: FETCH_ORDERS,
    payload: res,
  });
};

export const addOrder: any = (
  { cartItems, restaurantName, totalPrice }: any,
  callback: any,
) => async () => {
  const params = {
    id: Math.floor(Math.random() * 99999),
    created_at: Date.now(),
    items: cartItems,
    restaurant: restaurantName,
    totalPrice,
    status: 'inprogress',
  };

  await api.post('/orders', params);
  if (callback) {
    callback();
  }
};
