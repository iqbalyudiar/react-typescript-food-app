export interface IAction {
  type: string;
  payload: {
    data: IState;
  };
}

export interface IRestaurant {
  id: string | number;
  name: string;
  logo: string;
  foods: [IFood];
  rating: string;
}

export interface IFood {
  id: string | number;
  name: string;
  price: number;
}
export interface IState {
  restaurant: [IRestaurant];
}
