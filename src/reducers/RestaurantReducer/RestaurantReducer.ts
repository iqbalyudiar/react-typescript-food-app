import { FETCH_RESTAURANTS } from '@/constant/redux/types';
import { IAction } from './interfaces';

export default (state = [], action: IAction) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.payload.data;
    default:
      return state;
  }
};
