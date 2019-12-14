import { types } from '../actions/login';
import { BaseAction } from '../../common';

const initialState = {
    loading: false,
    loggedIn: false,
    user: null
}

export default function loginReducer(state=initialState, action: BaseAction) {
    switch(action.type) {
        case types.LOGIN.REQUEST:
        case types.LOGOUT.REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.LOGIN.SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                user: action.payload
            }
        case types.LOGIN.FAILURE:
            return {
                ...state,
                loading: false,
            }
        case types.LOGOUT.SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                user: null
            }
        case types.LOGOUT.FAILURE:
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}