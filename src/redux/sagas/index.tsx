import { all, fork } from 'redux-saga/effects'
import { loginRootSaga } from './login'

export const rootSaga = function* root() {
    yield all([ fork(loginRootSaga) ]);
};