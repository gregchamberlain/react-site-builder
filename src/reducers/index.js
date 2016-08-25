import LayoutReducer from './LayoutReducer';
import ItemsReducer from './ItemsReducer';
import EditorReducer from './EditorReducer';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    layout: LayoutReducer,
    items: ItemsReducer,
    editor: EditorReducer
});

export default RootReducer;
