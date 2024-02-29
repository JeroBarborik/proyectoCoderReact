
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyDr2WA9NWUfjvJ21DN7WM6ZMEE1-h_Au4U",
  authDomain: "jebar-f5287.firebaseapp.com",
  projectId: "jebar-f5287",
  storageBucket: "jebar-f5287.appspot.com",
  messagingSenderId: "921804843272",
  appId: "1:921804843272:web:e899dc20891033ae3c64bd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)