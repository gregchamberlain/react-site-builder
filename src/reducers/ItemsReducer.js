import {  ItemConstants } from '../actions/ItemsActions';
import _ from 'lodash';
import Catalog from '../catalog';

const items = (state = {}, action) => {
  switch (action.type) {
    case ItemConstants.ADD_ITEM:
     const i = 'i' + Math.floor(Math.random() * 10000); // Random id
     return Object.assign({}, state, {[i]: {
       component: action.component,
       i: i,
       x: 0,
       y: 10000, // puts it at the bottom
       w: 4,
       h: 6,
       props: Catalog[action.component].defaultProps
     }});
    case ItemConstants.UPDATE_PROPS:
      let item = Object.assign({}, state[action.i]);
      item.props = action.props;
      return Object.assign({}, state, { [action.i]: item });
    case ItemConstants.REMOVE_ITEM:
      let newState = Object.assign({}, state);
      delete newState[action.i];
      return newState;
    default:
      return state;
  }
};

export default items;
