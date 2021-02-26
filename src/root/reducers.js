//here is combineReducers

import { combineReducers } from 'redux';
import ToDoReducer from "../modules/ToDoRequestes/ToDoReducer";

export const reducer = combineReducers({
  ToDoReducer
});