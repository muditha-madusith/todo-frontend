import { combineReducers } from "redux";

import todoReducer from "./TodoReducer";

export const RootReducer = combineReducers({
    todo: todoReducer
})