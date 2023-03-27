import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDMCXSWbArPqnSF-La8PJKk1myI831l7o0",
  authDomain: "fir-auth-11-g.firebaseapp.com",
  projectId: "fir-auth-11-g",
  storageBucket: "fir-auth-11-g.appspot.com",
  messagingSenderId: "1057676307647",
  appId: "1:1057676307647:web:36985d30b8250fa6532a0a",
  measurementId: "G-6JHSN2D6VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };