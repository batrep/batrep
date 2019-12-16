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


const profileTransformer = profile => {
    console.log("PROFILE TRANSFORMER", profile);
    return profile;
}

function* readProfileSaga(uid) {
    try {
        const profile: Profile = yield call(rsf.firestore.getDocument, "/profile/{$uid}")
        yield put(readSuccess(profile));
    } catch (error) {
        yield put(readFailure(error))
    }
}

export function* profileRootSaga() {
    yield all([
        takeEvery(types.READ.REQUEST, readProfileSaga)
    ])
}