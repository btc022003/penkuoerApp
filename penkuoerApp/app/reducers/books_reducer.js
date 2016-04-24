/**
 * Created by yuluo on 16/04/12.
 */

import * as types from '../constants/ActionTypes'

const initialState = {
	books:[],
	page_data:{},
	query_data:{},
	current_book:{}
};

export default function books(state = initialState,action=""){
    switch(action.type) {

    	case types.LOAD_BOOK_DATA:
    		action.data.data.map(item=>state.books.push(item)); 
            state.page_data.current_page = action.data.current_page+1;
            state.page_data.total_pages = action.data.total_pages;
    		return Object.assign({}, state);
        
        case types.LOAD_BOOK_DETAIL:
            state.current_book = action.data.data;  
            //console.log(state.current_book)          
            return Object.assign({}, state);

        case types.RESET_CURRENT_BOOK:
            state.current_book = {}
            return Object.assign({},state);

        default:
            return state;
    }
}