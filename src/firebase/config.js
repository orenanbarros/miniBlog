
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAmcGqV5SBFhdb12wB4Xt0OzleBL92A_2Q",
    authDomain: "miniblogreact-f1e02.firebaseapp.com",
    projectId: "miniblogreact-f1e02",
    storageBucket: "miniblogreact-f1e02.appspot.com",
    messagingSenderId: "950856223689",
    appId: "1:950856223689:web:cfc1aab9ec475ba3243618",
    measurementId: "G-QSHWDF4GLW"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFireStore(app)

export { db };