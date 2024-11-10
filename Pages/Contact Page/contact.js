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
  var name = document.getElementById("name1").value;
  var email = document.getElementById("email1").value;
  var phone = document.getElementById("phone1").value;
  var message = document.getElementById("message1").value;
  
  console.log(name , email , phone , message);
  // console.log(email);
  // console.log(phone);
  // console.log(message);
  

  var userObj = {
    userName: name,
    userEmail: email,
    userNumber: phone,
    userMsg: message,
  }


  firebase.database().ref("users").push(userObj);

} catch (error) {
  console.log(error);
}

}






document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
  
    form.addEventListener("submit", function (event) {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    });
  });
  

