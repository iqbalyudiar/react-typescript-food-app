import { createStore, applyMiddleware } from 'redux';
// import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from '@/reducers';

/* Create root reducer, containing all features of the application */

const store = createStore(
  reducers,
  // /* preloadedState, */ devToolsEnhancer({}),
  undefined,
  applyMiddleware(thunk),
);

export default store;
