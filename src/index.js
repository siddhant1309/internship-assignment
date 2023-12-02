import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import firebase from 'firebase/app'; // Import the core Firebase module

import reportWebVitals from './reportWebVitals';

// const firebaseConfig = {
  // Your Firebase configuration
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
