// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC75EfhFDhvnM3WfUfrLAV_0d4jwE-uRWQ",
    authDomain: "optic-world-7f9cc.firebaseapp.com",
    projectId: "optic-world-7f9cc",
    storageBucket: "optic-world-7f9cc.firebasestorage.app",
    messagingSenderId: "304045083727",
    appId: "1:304045083727:web:88afcb6f124c0004c96e3a"
};

var app = firebase.initializeApp(firebaseConfig);

// console.log(app);

function signUp(){
    var email = document.getElementById("email")
    var password = document.getElementById("password")

    console.log(email.value , password.value);
    
    
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user);
        window.location.href = "file:///C:/Users/Laptops%20vala/Desktop/Final%20Hackaton/Pages/Home%20Page/home.html"
        
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });

}
      


