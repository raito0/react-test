import {
    call, put, takeLatest
} from 'redux-saga/effects';
import { ADD_SUCCESS } from '../constants/todo.constant';
import { addTodo } from '../services/todo.service';
function* getAPI(action) {
    const data = yield call(addTodo, {name: action.name, address: action.address});
    yield put({
        type: ADD_SUCCESS,
        payload: data
    })
}
export default function* () {
    yield takeLatest(ADD_SUCCESS, getAPI);
}