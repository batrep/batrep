import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
})

const rsf = new ReduxSagaFirebase(firebaseApp)

export default rsf;