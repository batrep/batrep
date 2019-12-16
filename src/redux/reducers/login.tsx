import { types } from '../actions/login';
import { BaseAction } from '../actions/common';
import { LoginAction } from '../actions/login';
import { User } from 'firebase';

export interface LoginState {
    loading: boolean,
    loggedIn: boolean,
    user: User | null
}

const initialState: LoginState = {
    loading: false,
    loggedIn: false,
    user: null
}

export function loginReducer(state=initialState, action: BaseAction) {
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
                user: (action as LoginAction).user
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