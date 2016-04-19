/**
 * Created by yuluo on 16/04/11.
 */
import { combineReducers } from 'redux';
import movies from './movies_reducer'
import books from './books_reducer'

const rootReducer = combineReducers({
    movies,
    books

});

export default rootReducer;