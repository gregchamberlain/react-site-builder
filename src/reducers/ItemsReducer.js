import {  ItemConstants } from '../actions/ItemsActions';
import _ from 'lodash';

const items = (state = [], action) => {
  switch (action.type) {
    case ItemConstants.ADD_ITEM:
      return [...state, {
        component: action.component,
        i: 'n' + state.length,
        x: 0,
        y: 10000, // puts it at the bottom
        w: 2,
        h: 2,
        props: action.props
      }];
    case ItemConstants.REMOVE_ITEM:
      return _.reject(state, {i: action.i});
    default:
      return state;
  }
};

export default items;