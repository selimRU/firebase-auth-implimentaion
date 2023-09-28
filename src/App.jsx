


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LogIn from './LogIn.jsx';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSe-8aNpYLoyiDWr96MMOIjOKKi_fIcFk",
  authDomain: "fir-auth-implimentaion.firebaseapp.com",
  projectId: "fir-auth-implimentaion",
  storageBucket: "fir-auth-implimentaion.appspot.com",
  messagingSenderId: "659216672547",
  appId: "1:659216672547:web:8360646966620547e34e96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app