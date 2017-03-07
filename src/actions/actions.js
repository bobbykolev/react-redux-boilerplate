import * as types from '../constants/actionTypes';
import RestService from '../services/RestService';

// example of a thunk using the redux-thunk middleware
export function getData() {
    return function(dispatch) {
        return RestService.get('./data.json').then(function(data) {
            if (data && !arguments[2]) {
                    dispatch({
                    type: types.GET_SUCCESS,
                    data: data
                });
            } else {
                //todo: handle error
            }
        }).catch(function(e) {
            throw (e);
        });
    };
}