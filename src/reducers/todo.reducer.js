import * as actionTypes from '../constants/todo.constant';

const initState = {
  list: [],
  isFetching: false,
  isAdding: false,
  error: false,
};

const reducer = (state = initState, action) => {
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
            ...payload
          ],
          isFetching: false
        };
      case actionTypes.FETCH_ERROR:
        return {...state, error: true};
      case actionTypes.ADD_REQUEST:
        return {...state, isAdding:true};
      case actionTypes.ADD_SUCCESS:
        return {
          ...state, 
          list: [
            ...state.list,
            ...payload
          ],
          isAdding: true
        }
      case actionTypes.ADD_ERROR:
        return {...state, error: true}
      default:
        return state;
    }
  };
export default reducer;