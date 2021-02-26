import { call, put, takeLatest } from 'redux-saga/effects'
import {TODO_REQUESTS} from "./ToDoReducer";
import * as api from "../api";
import {GetList} from "./ToDoAction";

// For get task list

function* ToDoSaga( ) {
  yield takeLatest( TODO_REQUESTS.GET_LIST_REQUEST, handleSaga );
}

function* handleSaga() {
  try {
    const { data } = yield call( api.getToDoList );

    yield put({
      type: TODO_REQUESTS.GET_LIST_SUCCESS,
      payload: { data }
    });

  } catch (e) {
    console.log( e.message )
  }
}

// For Create task

export function* CreateTodoSaga() {
  yield takeLatest(TODO_REQUESTS.ADD_TODO_REQUEST, handleCreateSaga);
}

function* handleCreateSaga( action ) {
  try {
    const { data } = yield call( api.createTodoList, action.payload.data );

    yield put({
      type: TODO_REQUESTS.ADD_TODO_SUCCESS,
      payload: { data }
    });

    yield put( GetList() )

  } catch (e) {
    console.log( e.message )
  }
}

// For delete task

export function* DeleteTodoSaga( ) {
  yield takeLatest( TODO_REQUESTS.DELETE_TODO_REQUEST, handleDeleteSaga );
}

function* handleDeleteSaga( action ) {
  try {
    const { data } = yield call( api.DeleteToDoList, action.payload.data );

    yield put({
      type: TODO_REQUESTS.DELETE_TODO_SUCCESS,
      payload: { data }
    });
    yield put( GetList() )

  } catch (e) {
    console.log( e.message )
  }
}

// For edit Task

export function* EditTodoSaga( ) {
  yield takeLatest( TODO_REQUESTS.EDIT_TODO_REQUEST, handleEditSaga );
}

function* handleEditSaga(action) {
  try {
    const { data } = yield call( api.EditToDoList, action.payload.data );

    yield put({
      type: TODO_REQUESTS.EDIT_TODO_SUCCESS,
      payload: { data }
    });
    yield put( GetList() )

  } catch (e) {
    console.log( e.message )
  }
}

// For search task

export function* SearchTodoSaga( ) {
  yield takeLatest( TODO_REQUESTS.SEARCH_TODO_REQUEST, handleSearchSaga );
}

function* handleSearchSaga( action ) {
  try {
    const { data } = yield call( api.SearchToDoList, action.payload.data );

    yield put({
      type: TODO_REQUESTS.SEARCH_TODO_SUCCESS,
      payload: { data : [data] }
    });

  } catch (e) {
     console.log(e.message)
  }
}

export default ToDoSaga;