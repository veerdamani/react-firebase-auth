import { initializeApp } from 'firebase/app';
import { getAuth , createUserWithEmailAndPassword , updateProfile , sendPasswordResetEmail } from "firebase/auth";
import { getFirestore , doc , setDoc , collection ,addDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDAIiow9tXe1PZP2J95TBYBPRlasZ1-AJI",
    authDomain: "react-practice-firebase-64ae6.firebaseapp.com",
    projectId: "react-practice-firebase-64ae6",
    storageBucket: "react-practice-firebase-64ae6.firebasestorage.app",
    messagingSenderId: "428391977003",
    appId: "1:428391977003:web:69526d7667b90b74fb5a6e"
};


initializeApp(firebaseConfig);
const auth = getAuth();
const db =  getFirestore();

export { auth , createUserWithEmailAndPassword , updateProfile , sendPasswordResetEmail , doc , setDoc , db  , collection, addDoc}