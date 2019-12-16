import firebase from 'firebase/app';
import 'firebase/database';
import { User } from 'firebase';
import { all, call, fork, put, take, takeEvery } from 'redux-saga/effects';

import { 
    types,
    readSuccess,
    readFailure,
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

function syncProfileTransform(snapshot) {
    return snapshot.data();
}

function* syncProfileSaga(action) {
    yield fork(rsf.firestore.syncDocument, `/profiles/${action.uid}`, {
        successActionCreator: readSuccess,
        transform: syncProfileTransform
    })
}

export function* profileRootSaga() {
    yield all([
        takeEvery(types.READ.REQUEST, readProfileSaga),
        takeEvery(types.SYNC.REQUEST, syncProfileSaga)
    ])
}