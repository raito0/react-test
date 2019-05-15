import * as actionTypes from '../constants/todo.constant';

export const fetchTodoRequest = () =>{
  return {
    type: actionTypes.FETCH_REQUEST,
  }
}

export const fetchTodoSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    payload
  }
} 
// ({
//   type: actionTypes.FETCH_SUCCESS,
//   payload
// })

export const fetchTodoError = () => ({
  type: actionTypes.FETCH_ERROR,
  error: true
})
export const addRequest = () => ({
  type: actionTypes.ADD_REQUEST,
})
export const addSuccess = (payload) => {
  return {
    type: actionTypes.ADD_SUCCESS,
    payload
  }
} 
export const addError = () => ({
  type: actionTypes.ADD_ERROR,
  error: true
})