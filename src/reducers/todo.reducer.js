import * as actionTypes from '../constants/todo.constant';

const initState = {
  list: [],
  isFetching: false,
  isAdding: false,
  error: false,
};

export const reducer_fetch = (state = initState, action) => {
    switch (action.type) {
      case actionTypes.FETCH_REQUEST:
        return {
          ...state,
          isFetching: true
        };
      case actionTypes.FETCH_SUCCESS: 
        return {
          ...state, 
          list: [
            ...state.list,
            ...action.payload
          ],
          isFetching: false
        };
      case actionTypes.FETCH_ERROR:
        return {...state, error: true};
      default:
        return state;
    }
  };
export const reducer_add = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_REQUEST:
      console.log('adsf');
        return {...state, isAdding:true};
      case actionTypes.ADD_SUCCESS:
        return {
          ...state, 
          list: [
            ...state.list,
            ...action.payload
          ],
          isAdding: true
        }
      case actionTypes.ADD_ERROR:
        return {...state, error: true}
      default:
        return state;
  }
};

