var firebaseConfig = {
  apiKey: "AIzaSyC75EfhFDhvnM3WfUfrLAV_0d4jwE-uRWQ",
  authDomain: "optic-world-7f9cc.firebaseapp.com",
  databaseURL: "https://optic-world-7f9cc-default-rtdb.firebaseio.com",
  projectId: "optic-world-7f9cc",
  storageBucket: "optic-world-7f9cc.firebasestorage.app",
  messagingSenderId: "304045083727",
  appId: "1:304045083727:web:88afcb6f124c0004c96e3a"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function sendMessage(){
try {
  var name = document.getElementById("username").value;
  var email = document.getElementById("useremail").value;
  var phone = document.getElementById("userphone").value;
  var message = document.getElementById("usermessage").value;
  var empty = document.getElementsByClassName("emptyinput")
  
  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(message);

  var userDetail = {
    userName: name,
    userEmail: email,
    userNumber: phone,
    userMsg: message,
  }

  firebase.database().ref("users").push(userDetail);

  empty = ""

} catch (error) {
  console.log(error);
}
}






// document.addEventListener("DOMContentLoaded", function () {
//     const form = document.getElementById("contactForm");
  
//     form.addEventListener("submit", function (event) {
//       if (!form.checkValidity()) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add("was-validated");
//     });
//   });
  

