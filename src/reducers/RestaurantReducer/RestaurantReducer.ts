import { FETCH_RESTAURANTS } from '@/constant/redux/types';
import { IAction } from './interfaces';

const initialState = {
  restaurantList: [],
  restaurant: {},
};
export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return {
        ...state,
        restaurantList: action.payload.data,
      };
    default:
      return state;
  }
};
