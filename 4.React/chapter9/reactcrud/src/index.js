import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB3iSLL-o3QHjMWUPB-549yuhQZIkz_ZIo",
  authDomain: "new-react-app-5da33.firebaseapp.com",
  projectId: "new-react-app-5da33",
  storageBucket: "new-react-app-5da33.appspot.com",
  messagingSenderId: "1074442376187",
  appId: "1:1074442376187:web:1831c75cce532a834ab15e",
  measurementId: "G-2Y9LSM8QMW"
};
firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// ReactDOM.render(<App />, document.getElementById('root'));
// serviceWorker.unregister();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
