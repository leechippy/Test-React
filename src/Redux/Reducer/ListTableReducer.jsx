import React from 'react';
import { FETCH_INIT, FETCH_FAILURE, FETCH_SUCCESS, DELETE_ITEM } from './constant';
const initailState = {
    list: [],
    isloading: false,
    error: null
}
const ListTableReducer = (state, action) => {
    switch (action.type) {
        case FETCH_INIT:
            return {
                ...initailState,
                isloading: true
            }
        case FETCH_SUCCESS:
            return {
                ...initailState,
                list: action.payload,
                isloading: false
            }
        case FETCH_FAILURE:
            return {
                ...initailState,
                error: action.payload,
                isloading: false
            }
        case DELETE_ITEM:
            return {
                ...initailState,
                list: state.list.filter((item) => item.id != action.payload),
                isloading: false
            }
        default:
            return state
    }


}

export { ListTableReducer, initailState };
