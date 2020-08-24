import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
// your config here
};

const db = firebase.initializeApp(firebaseConfig).database();
const serverTimeStamp = firebase.database.ServerValue.TIMESTAMP;

export {
    db,
    serverTimeStamp
};

