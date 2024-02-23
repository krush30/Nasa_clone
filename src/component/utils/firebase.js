// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJYy63EDAJz_bj5KwAYYVdwPKowewk_tA",
    authDomain: "space-753cc.firebaseapp.com",
    projectId: "space-753cc",
    storageBucket: "space-753cc.appspot.com",
    messagingSenderId: "1005360604287",
    appId: "1:1005360604287:web:66bfda7c5edb1e1933cb4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();