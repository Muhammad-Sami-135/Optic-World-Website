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

function login() {
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  console.log(email.value, password.value);

  firebase.auth().signInWithEmailAndPassword(email.value, password.value)
      .then(() => {
          // The link was successfully sent. Inform the user.
          // Save the email locally so you don't need to ask the user for it again
          // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email.value , password.value);
          window.location.href = "./Pages/Home Page/home.html"
          // ...
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
      });

} 