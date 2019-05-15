import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/rootReducer';

import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas/todo.saga';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

export default store;