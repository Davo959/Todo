export const TODO_REQUESTS = {
  // For get task list
  GET_LIST_REQUEST: 'TODO_REQUESTS.GET_LIST_REQUEST',
  GET_LIST_SUCCESS: 'TODO_REQUESTS.GET_LIST_SUCCESS',
  // For Create task
  ADD_TODO_REQUEST: 'TODO_REQUESTS.ADD_TODO_REQUEST',
  ADD_TODO_SUCCESS: 'TODO_REQUESTS.ADD_TODO_SUCCESS',
  // For delete task
  DELETE_TODO_REQUEST: 'TODO_REQUESTS.DELETE_TODO_REQUEST',
  DELETE_TODO_SUCCESS: 'TODO_REQUESTS.DELETE_TODO_SUCCESS',
  // For edit Task
  EDIT_TODO_REQUEST: 'TODO_REQUESTS.EDIT_TODO_REQUEST',
  EDIT_TODO_SUCCESS: 'TODO_REQUESTS.EDIT_TODO_SUCCESS',
  // For search task
  SEARCH_TODO_REQUEST: 'TODO_REQUESTS.SEARCH_TODO_REQUEST',
  SEARCH_TODO_SUCCESS: 'TODO_REQUESTS.SEARCH_TODO_SUCCESS',
  //For Pending
  PENDING_TODO_REQUEST : 'TODO_REQUESTS.PENDING_TODO_REQUEST',
}

const initialState = {
  ToDoList: [],
  CheckPending:null
}

export default  ( state=initialState, action ) => {
  switch ( action.type ) {

    case TODO_REQUESTS.GET_LIST_SUCCESS: {
      return {...state,ToDoList:action.payload.data,}
    }

    case TODO_REQUESTS.SEARCH_TODO_REQUEST: {
      return {...state, ToDoList: '',}
    }

    case TODO_REQUESTS.SEARCH_TODO_SUCCESS: {
      return {...state, ToDoList: action.payload.data,}
    }

    case TODO_REQUESTS.PENDING_TODO_REQUEST: {
      return {...state, CheckPending: action.payload.data,}
    }


    default: {
      return state
    }
  }
}

