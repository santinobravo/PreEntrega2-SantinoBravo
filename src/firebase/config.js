// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRIEpM-oyPwEELLg74ugoYU0ELQB_9ajw",
    authDomain: "big-burger-b800c.firebaseapp.com",
    projectId: "big-burger-b800c",
    storageBucket: "big-burger-b800c.appspot.com",
    messagingSenderId: "666251620185",
    appId: "1:666251620185:web:cdbcd527db771d39eba648"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)