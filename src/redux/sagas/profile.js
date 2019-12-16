import firebase from 'firebase/app';
import 'firebase/database';
import { User } from 'firebase';
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';

import { 
    types,
    read,
    readSuccess,
    readFailure,
    Profile
} from '../actions/profile';

import rsf from '../rsf';

function* readProfileSaga(action) {
    try {
        const snapshot = yield call(rsf.firestore.getDocument, `/profiles/${action.uid}`);
        const profile = snapshot.data();
        yield put(readSuccess(profile));
    } catch (error) {
        yield put(readFailure(error))
    }
}

function* syncProfileSaga(action) {
    /*
    yield fork(rsf.firestore.syncDocument, `/profiles/${action.uid}`, {
        successAction: readSuccess
    })
    */
}

export function* profileRootSaga() {
    yield all([
        takeEvery(types.READ.REQUEST, readProfileSaga),
    ])
}