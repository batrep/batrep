import { combineReducers } from 'redux';
import loginReducer from './login';

export interface State {
    login
}
  
export const rootReducers = combineReducers<State>({
    login: loginReducer
});