import axios from "axios";

// For get task list

export function getToDoList( ) {
  return axios.get( 'https://todo.eachbase.com/api/DavitPetrosyan/todos', )
}

// For Create task

export function createTodoList( data ) {
  return axios.post(`https://todo.eachbase.com/api/DavitPetrosyan/todos`, {
    title: data.Tittle,
    description: data.Description,
    color: data.color,
  })
}

// For delete task

export function DeleteToDoList( id ) {
  return axios.delete(`https://todo.eachbase.com/api/DavitPetrosyan/todos/${id}`, )
}

// For edit Task

export function EditToDoList( data ) {
  return axios.patch(`https://todo.eachbase.com/api/DavitPetrosyan/todos/${data.id}`, {
    title: data.title,
    description: data.description,
    color: data.color
  })
}

// For search task

export function SearchToDoList( id ) {
  return axios.get(`https://todo.eachbase.com/api/DavitPetrosyan/todos/${id}`, )
}

