//here is fork saga

import {fork} from 'redux-saga/effects';
import ToDoSaga, {
  CreateTodoSaga,
  DeleteTodoSaga,
  EditTodoSaga,
  SearchTodoSaga
} from "../modules/ToDoRequestes/ToDOSaga";

export default function* watchers( ) {
  return [
    yield fork( ToDoSaga ),
    yield fork( CreateTodoSaga ),
    yield fork( DeleteTodoSaga ),
    yield fork( EditTodoSaga ),
    yield fork( SearchTodoSaga )
  ]
}