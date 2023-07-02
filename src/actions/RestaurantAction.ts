import api from '@/utils/api';
import { FETCH_RESTAURANTS } from '@/constant/redux/types';
import { Dispatch } from 'redux';

export const fetchRestaurants: any = () => async (dispatch: Dispatch) => {
  const res = await api.get('/restaurants');

  dispatch({
    type: FETCH_RESTAURANTS,
    payload: res,
  });
};
