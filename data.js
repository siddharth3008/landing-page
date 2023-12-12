const firebaseConfig = {
    apiKey: "AIzaSyAKR--d7VaFocGcMzDGWRx8YBf9X8VAqvY",
    authDomain: "nomad-x-1fea2.firebaseapp.com",
    databaseURL: "https://nomad-x-1fea2-default-rtdb.firebaseio.com",
    projectId: "nomad-x-1fea2",
    storageBucket: "nomad-x-1fea2.appspot.com",
    messagingSenderId: "520106733978",
    appId: "1:520106733978:web:3927c53a9ab11cd1124a23",
    measurementId: "G-5HWBJTT38T"
  };
  
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("registerForm");

document.getElementById("registerForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var gender = getElementVal("gender");
  var city = getElementVal("city");
  var country = getElementVal("country");

  saveMessages(name, email, gender,city,country);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("registerForm").reset();
}

const saveMessages = (name, email, gender,city,country) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    gender:gender,
    city:city,
    country:country,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};