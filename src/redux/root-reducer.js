import { combineReducers } from "redux";
import shoppingCartReducer from "./reducer";

const rootReducer = combineReducers({
    data: shoppingCartReducer,
})

export default rootReducer;
