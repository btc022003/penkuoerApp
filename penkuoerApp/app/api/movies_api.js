/**
 * Created by yuluo on 16/04/12.
 */
import * as types from '../constants/ActionTypes'
import * as APIConfig from '../constants/APIConfig'
export default class MoviesApi {

    constructor(){

    }

    /////分页方式加载数据
    load_data(dispatch, page_index = 1) {    	
        let url = APIConfig.APIBaseUrl + '/movie/get_movies_by_page.json?page=' + page_index;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                    dispatch({
                    type: types.LOAD_MOVIE_DATA,
                    data: res
                })
            })
            .done();
    }

    ///////获取数据详情
    load_blog_detail(dispatch,id){
        let url = APIConfig.APIBaseUrl + '/movie/get_movie_detail.json?id=' + id;
        fetch(url)
            .then((res) => res.json())
            .then((res) => {
                    dispatch({
                    type: types.LOAD_BOOK_DETAIL,
                    data: res
                })
            })
            .done();  
    }
}