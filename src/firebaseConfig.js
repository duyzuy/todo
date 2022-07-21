import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6MxHDcliKRk7QmH5-xLEZA49Y95r9S4g",
    authDomain: "todo-a4397.firebaseapp.com",
    projectId: "todo-a4397",
    storageBucket: "todo-a4397.appspot.com",
    messagingSenderId: "831713017732",
    appId: "1:831713017732:web:2ebe4a4f841bc843a6e7d1",
    measurementId: "G-PWEYWPHDST"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


