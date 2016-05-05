/**
 * Created by yuluo on 16/04/11.
 */
import * as types from '../constants/ActionTypes'
import MoviesApi from '../api/movies_api'

export function load_movies_data(){
	return dispatch => MoviesApi.prototype.load_data(dispatch)
}

/////加载更多
export function load_more(page_index){
    return dispatch => MoviesApi.prototype.load_data(dispatch,page_index)
}

//////获取详情
export function load_blog_detail(id) {
    return dispatch => MoviesApi.prototype.load_movie_detail(dispatch,id)    
}

export function reset_current_book(){
	return {
        type:types.RESET_CURRENT_MOVIE,
        data:{}
    }   
}