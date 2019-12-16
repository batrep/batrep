import { BaseAction, BaseError } from './common';
import { User } from 'firebase';

export interface LoginAction extends BaseAction {
    user: User;
}

export const types = {
    LOGIN: {
        REQUEST: 'LOGIN.REQUEST',
        SUCCESS: 'LOGIN.SUCCESS',
        FAILURE: 'LOGIN.FAILURE',
    },
    LOGOUT: {
        REQUEST: 'LOGOUT.REQUEST',
        SUCCESS: 'LOGOUT.SUCCESS',
        FAILURE: 'LOGOUT.FAILURE',
    },
}

export const login = () => ({
    type: types.LOGIN.REQUEST,
})
  
export const loginSuccess = (user: User): LoginAction => ({
    type: types.LOGIN.SUCCESS,
    user: user,
}) 
  
export const loginFailure = (error: any): BaseError => ({
    type: types.LOGIN.FAILURE,
    error: error,
})
  
export const logout = (): BaseAction => ({
    type: types.LOGOUT.REQUEST,
})
  
export const logoutSuccess = (): BaseAction => ({
    type: types.LOGOUT.SUCCESS,
})
  
export const logoutFailure = (error: any): BaseError => ({
    type: types.LOGOUT.FAILURE,
    error: error,
})