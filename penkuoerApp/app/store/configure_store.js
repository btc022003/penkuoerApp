/**
 * Created by yuluo on 16/04/11.
 */
import {createStore} from 'redux'

import {combineReducers,applyMiddleware,compose} from 'redux'

import rootReducer from '../reducers/index_reducer'

import thunk from 'redux-thunk'


export default function configureStore() {
    const reducer = combineReducers({
        app: rootReducer
    });

    const store = compose(
        applyMiddleware(thunk))(createStore)(reducer);

    return store
}