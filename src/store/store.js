
import { createStore } from 'redux';
import RootReducer from '../reducers';

const configureStore = () => {
  return createStore(RootReducer);
};

export default configureStore;
