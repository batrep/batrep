import { combineReducers } from 'redux';
import { loginReducer, LoginState } from './login';
import { profileReducer, ProfileState } from './profile';

export interface State {
    login: LoginState,
    myProfile: ProfileState
}
  
export const rootReducers = combineReducers<State>({
    login: loginReducer,
    myProfile: profileReducer
});