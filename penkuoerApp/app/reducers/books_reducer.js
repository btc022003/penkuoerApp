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
        
        default:
            return state;
    }
}