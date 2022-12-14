import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import AuthService from "./AuthService";
import FirestoreService from "./FirestoreService";

const firebaseConfig = {
    apiKey: "AIzaSyDhkBqG_ysWWuK1rkT8b45SbhtChOzx6Mw",
    authDomain: "vcpl-robotics-2327d.firebaseapp.com",
    projectId: "vcpl-robotics-2327d",
    storageBucket: "vcpl-robotics-2327d.appspot.com",
    messagingSenderId: "139375668684",
    appId: "1:139375668684:web:9e3493e2226fc646e18169",
    measurementId: "G-T1LKRGP8V4"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
export const authService = new AuthService(auth);

const firestore = getFirestore(firebaseApp);
export const firestoreService = new FirestoreService(firestore);