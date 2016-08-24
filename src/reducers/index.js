import LayoutReducer from './LayoutReducer';
import ItemsReducer from './ItemsReducer';
import { combineReducers } from "redux";

const RootReducer = combineReducers({
    layout: LayoutReducer,
    items: ItemsReducer,
});

export default RootReducer;
