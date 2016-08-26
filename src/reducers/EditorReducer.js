import { OPEN_EDITOR, CLOSE_EDITOR } from '../actions/EditorActions';
import { ItemConstants } from '../actions/ItemsActions';

const EditorReducer = (state = false, action) => {
  switch (action.type) {
    case OPEN_EDITOR:
      return action.i;
    case CLOSE_EDITOR:
      return false;
    case ItemConstants.REMOVE_ITEM:
      if (action.i === state) {
        return false;
      }
      return state;
    default:
      return state;
  }
};

export default EditorReducer;
