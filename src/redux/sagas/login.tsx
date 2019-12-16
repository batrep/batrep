import firebase from 'firebase/app';
import { User } from 'firebase';
import 'firebase/auth';
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';

import {
    types,
    loginSuccess,
    loginFailure,
    logoutSuccess,
    logoutFailure
} from '../actions/login';

import { 
    read
} from '../actions/profile';

import rsf from '../rsf';

const authProvider = new firebase.auth.GoogleAuthProvider();

function* loginSaga() {
    try {
        yield call(rsf.auth.signInWithPopup, authProvider);
    } catch (error) {
        yield put(loginFailure(error));
    }
}

function* logoutSaga() {
    try {
        yield call(rsf.auth.signOut);
    } catch (error) {
        yield put(logoutFailure(error));
    }
}

function* loginStatusWatcher() {
    const channel = yield call(rsf.auth.channel);

    while (true) {
        const user: User = yield take(channel);

        if (user) {
            yield all([
                put(loginSuccess(user)),
                put(read(user.uid))
            ]) 
        } else {
            yield put(logoutSuccess())
        }
    }
}

export function* loginRootSaga() {
    yield fork(loginStatusWatcher)
    yield all([
        takeEvery(types.LOGIN.REQUEST, loginSaga),
        takeEvery(types.LOGOUT.REQUEST, logoutSaga)
    ])
}