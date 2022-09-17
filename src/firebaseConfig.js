import { initializeApp } from "firebase/app";
import { getFirestore  } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC2Pn7uT8SQQAgiQPcRBvLk2LlDOJgDoOA",
    authDomain: "react-37080.firebaseapp.com",
    projectId: "react-37080",
    storageBucket: "react-37080.appspot.com",
    messagingSenderId: "232447464969",
    appId: "1:232447464969:web:b4bd8b7de0d8bb779bcad8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);