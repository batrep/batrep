import { all, fork } from 'redux-saga/effects';
import { loginRootSaga } from './login';
import { profileRootSaga } from './profile';

export const rootSaga = function* root() {
    yield all([ fork(loginRootSaga), fork(profileRootSaga) ]);
};