// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD57vc1y5XnE7d1pVVS0KKzwKl5hQnk1pU",
  authDomain: "x-clone-ed916.firebaseapp.com",
  projectId: "x-clone-ed916",
  storageBucket: "x-clone-ed916.appspot.com",
  messagingSenderId: "756148965794",
  appId: "1:756148965794:web:c9bdedfb752ecb421a62fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// kimlik doğrulama yapısının referansını al

export const auth = getAuth(app);

// google provider kurulumu
export const provider = new GoogleAuthProvider();

// veritabanı referansını alma
export const db = getFirestore(app);

// storage ın referansını alma
export const storage = getStorage(app);