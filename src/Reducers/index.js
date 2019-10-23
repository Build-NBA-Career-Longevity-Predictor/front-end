import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { playersReducer } from "./playersReducer";

export const reducer = combineReducers({ userReducer, playersReducer });
