import { reducer_add, reducer_fetch } from './todo.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
    reducer_fetch,
    reducer_add
});