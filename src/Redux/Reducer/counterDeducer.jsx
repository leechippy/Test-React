import React from 'react';
import { INCREMENT, DECREMENT } from './constant'
const initailState = {
    count: 0
}
const counterFunction = (state, action) => {
    switch (action.type) {

        case INCREMENT: {
            return {
                ...state,
                color: 'green',
                count: action.count
            };
        }
        case DECREMENT: {
            return {
                ...state,
                color: 'blue',
                count: action.count
            }
        }

        default:
            return state
    }


}
export { counterFunction, initailState }
