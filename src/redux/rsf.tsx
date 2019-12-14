import * as firebase from 'firebase/app';
import ReduxSagaFirebase from 'redux-saga-firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDlNLspkpQaxIZBaxGlFhxnBLjnEYQWkk0",
    authDomain: "batreputation.firebaseapp.com",
    databaseURL: "https://batreputation.firebaseio.com",
    projectId: "batreputation",
    storageBucket: "batreputation.appspot.com",
    messagingSenderId: "935789107085",
    appId: "1:935789107085:web:06274fc8236358c15c4fc4",
    measurementId: "G-ZEYNT7SPFJ"
});

const rsf = new ReduxSagaFirebase(firebaseApp);

export default rsf;