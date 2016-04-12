/**
 * Created by yuluo on 16/04/11.
 */

import * as types from '../constants/ActionTypes'

const initialState = {
	movies:[],
	page_data:{},
	query_data:{},
	current_movie:{}
};

export default function movies(state = initialState,action=""){
    switch(action.type) {
        case types.LOAD_MOVIE_DATA:
            action.data.data.map(item=>state.movies.push(item));            
            state.page_data.current_page = state.current_page+1;
            state.page_data.total_pages = action.data.total_pages;
            return Object.assign({}, state);

        case types.LOAD_MOVIE_DETAIL:
            //state.current_article = action.data
            //console.log(state)
            return Object.assign({}, state,{current_movie:action.data});


        default:
            return state;
    }
}