import {
    call, put, takeLatest
} from 'redux-saga/effects';
import { ADD_SUCCESS } from '../constants/todo.constant';
import { addTodo } from '../services/todo.service';
function* getAPI(action) {
    const requestData = yield call(addTodo, {name: action.name, address: action.address});
    yield put({
        type: ADD_SUCCESS,
        requestData
    })
}
export default function* () {
    yield takeLatest(ADD_SUCCESS, getAPI);
}