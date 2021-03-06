import requestStatuses from './request-statuses';
import {combineReducers} from 'redux';
import * as types from '../actions/types';

const page = () => {
    const data = (state = {}, action) => {
        switch (action.type) {
            case types.PAGE_FETCH.SUCCESS:
                return action.response;
            default:
                return state;
        }
    };

    const requestStatus = requestStatuses(undefined, types.PAGE_FETCH);

    return combineReducers({
        data,
        requestStatus
    });
};

export default page;

export const getPage = (state) => state.data;
export const isFetching = (state) => state.requestStatus.isFetching;
export const invalidRequest = (state) => state.requestStatus.invalidRequest;
export const errorMessage = (state) => state.requestStatus.errorMessage;
