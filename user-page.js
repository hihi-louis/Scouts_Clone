  // import {
      //   getAuth,
      //   createUserWithEmailAndPassword,
      // } from "./node_modules/firebase/auth";

      import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
          console.log(user,document.querySelector('#user-name') );
          document.querySelector('#login-user').innerHTML = `Hello ${user.email}`   
          
          document.querySelector('#user-name').innerHTML = `Hello ${user.email}`   
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
      // function login() {
      //   let email = document.getElementById("email").value;
      //   let password = document.getElementById("password").value;

      //   // In a real application, you would send a request to the server for authentication
      //   // and handle the response accordingly. This is just a simple example.
      //   // if (email === "demo" && password === "demo123") {
      //   //   alert("Login successful!");
      //   // } else {
      //   //   alert("Login failed. Please check your username and password.");
      //   // }

      //   const auth = getAuth();

      //   createUserWithEmailAndPassword(auth, email, password)
      //     .then((userCredential) => {
      //       // Signed up
      //       const user = userCredential.user;
      //       window.location.replace("../../index.html");
      //       // ...
      //     })
      //     .catch((error) => {
      //       const errorCode = error.code;
      //       const errorMessage = error.message;
      //       alert(errorMessage)
      //       // ..
      //     });
      //   // return false;
      // }