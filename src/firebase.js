// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCnyv4USTQ5U1Kfv-b3fUs-FgHCB0FozZQ",
  authDomain: "chat-app-c5a41.firebaseapp.com",
  projectId: "chat-app-c5a41",
  storageBucket: "chat-app-c5a41.appspot.com",
  messagingSenderId: "411862679391",
  appId: "1:411862679391:web:10a73a8f696352e03180ea"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();