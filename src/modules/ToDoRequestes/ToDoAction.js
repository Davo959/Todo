import { TODO_REQUESTS } from "./ToDoReducer";

// For get task list

export const GetList = ( ) => {
  return {
    type: TODO_REQUESTS.GET_LIST_REQUEST
  }
}

// For Create task

export const CreateList =( data ) => {
  return {
    type: TODO_REQUESTS.ADD_TODO_REQUEST,
    payload:{ data }
  }
}

// For delete task

export const DeleteTodoItem = ( data ) => {
  return {
    type: TODO_REQUESTS.DELETE_TODO_REQUEST,
    payload: { data }
  }
}

// For edit Task

export const EditTodoList = ( data ) => {
  return {
    type: TODO_REQUESTS.EDIT_TODO_REQUEST,
    payload: { data }
  }
}

// For search task

export const SearchTodoList = ( data ) => {
  return {
    type: TODO_REQUESTS.SEARCH_TODO_REQUEST,
    payload:{ data }
  }
}


export const PendingFunction = (data) => {
  return{
    type: TODO_REQUESTS.PENDING_TODO_REQUEST,
    payload:{data}
  }

}
