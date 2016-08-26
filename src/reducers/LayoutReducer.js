import { LayoutConstants } from '../actions/LayoutActions';

const layout = (state = [], action) => {
  switch (action.type) {
    case LayoutConstants.CHANGE_LAYOUT:
      return action.layout;
    case LayoutConstants.SAVE_LAYOUT:
      console.log("Saving...", state);
      return state;
    default:
      return state;
  }
};

export default layout;
