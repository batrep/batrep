import { all, fork } from 'redux-saga/effects'
import login from './login'

export const rootSaga = function* root() {
    yield all([ fork(login) ]);
};