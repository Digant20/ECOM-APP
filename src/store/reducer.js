import React from 'react';
import * as actionTypes from './actions';


const initialState = {
    searchInput: ""

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SEARCH_TERMS:
             return{
                 ...state,
                 searchInput:{
                     ...state.searchInput,
                     [action.searchName] : state.searchInput

                 }

             }
    
        default:
            break;
    }
}

export default reducer
