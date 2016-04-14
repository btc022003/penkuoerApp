/**
 * Created by yuluo on 16/04/14.
 *
 * book actions 
 * 书籍相关的actions
 * 
 */
import * as types from '../constants/ActionTypes'
import BooksApi from '../api/books_api'

export function load_movies_data(){
	return dispatch => BooksApi.prototype.load_data(dispatch)
}

/////加载更多
export function load_more(page_index){
    return dispatch => BooksApi.prototype.load_data(dispatch,page_index)
}

//////获取详情
export function load_blog_detail(id) {
    return dispatch => BooksApi.prototype.load_book_detail(dispatch,id)    
}