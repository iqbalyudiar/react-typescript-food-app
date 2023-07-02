import { FETCH_RESTAURANTS } from '@/constant/redux/types';

interface IAction {
  type: string;
  payload: {
    data: any;
  };
}
export default (state = [], action: IAction) => {
  switch (action.type) {
    case FETCH_RESTAURANTS:
      return action.payload.data;
    default:
      return state;
  }
};
