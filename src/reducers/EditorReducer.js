import { OPEN_EDITOR } from '../actions/EditorActions';

const defaultState = {
  inputTypes: {}
};

const EditorReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_EDITOR:
      return { inputTypes: action.inputTypes, i: action.i };
    default:
      return state;
  }
};

export default EditorReducer;