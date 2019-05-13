import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk));