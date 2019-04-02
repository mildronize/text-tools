import types from './actions';


import { combineReducers } from 'redux'

function output(state = "", action) {
    if (action.type === types.SET_OUTPUT) {
        return action.text;
    }
    return state;
}

function conversionType(state = types.UPPER_CASE, action){
    if (action.type === types.SET_CONVERSION_TYPE) {
        return action.text;
    }
    return state;
}

export default combineReducers({
    output,
    conversionType
});

