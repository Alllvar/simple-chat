import { createStore } from 'redux';
import createRootReducer from './reducers';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history)
);

export default store;
