import * as firebase from 'firebase';


const app = firebase.initializeApp({
    apiKey: "PROJECT_API_KEY_REMOVED_FOR_SECURITY_REASON",
    authDomain: "INFO_REMOVED_FOR_SECURITY_REASON",
    databaseURL: "hINFO_REMOVED_FOR_SECURITY_REASON",
    projectId: "INFO_REMOVED_FOR_SECURITY_REASON",
    storageBucket: "INFO_REMOVED_FOR_SECURITY_REASON",
    messagingSenderId: "INFO_REMOVED_FOR_SECURITY_REASON",
    appId: "INFO_REMOVED_FOR_SECURITY_REASON",
    measurementId: "INFO_REMOVED_FOR_SECURITY_REASON"
 });

export const db = firebase.firestore(app);
export const storage = firebase.storage(app);
export default app;
 
