  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDR1q4yjFqAtL4eq5ih5ydVn7fSwAScvac",
    authDomain: "dynamic-web---login-page.firebaseapp.com",
    projectId: "dynamic-web---login-page",
    storageBucket: "dynamic-web---login-page.appspot.com",
    messagingSenderId: "164102442138",
    appId: "1:164102442138:web:76fa9acda4012718eea323",
    measurementId: "G-J9JQTFS118",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);