import { BaseAction } from '../../common';
import { User } from 'firebase';

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
  
export const loginSuccess = (user: any): BaseAction => ({
    type: types.LOGIN.SUCCESS,
    payload: user,
}) 
  
export const loginFailure = (error: any): BaseAction => ({
    type: types.LOGIN.FAILURE,
    payload: error,
})
  
export const logout = () => ({
    type: types.LOGOUT.REQUEST,
})
  
export const logoutSuccess = () => ({
    type: types.LOGOUT.SUCCESS,
})
  
export const logoutFailure = (error: any): BaseAction => ({
    type: types.LOGOUT.FAILURE,
    payload: error,
})