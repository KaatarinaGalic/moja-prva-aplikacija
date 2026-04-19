// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZzZk4kjMMZ6Fj4ugFmv6v6jH9RImL_hc",
    authDomain: "mojaprvaaplikacija-8def0.firebaseapp.com",
    projectId: "mojaprvaaplikacija-8def0",
    storageBucket: "mojaprvaaplikacija-8def0.firebasestorage.app",
    messagingSenderId: "41196611253",
    appId: "1:41196611253:web:787bbc366ff9159df040fc",
    measurementId: "G-HXR6JCSHLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);