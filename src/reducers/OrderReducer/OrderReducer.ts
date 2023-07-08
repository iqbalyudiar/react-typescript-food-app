import { FETCH_ORDERS } from '@/constant/redux/types';

const initialState = {
  orderList: [],
};
export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_ORDERS:
      return { ...state, orderList: action.payload };
    default:
      return state;
  }
};
