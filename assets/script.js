// Initialize Firebase
var index = 0;

 // Initialize Firebase https://console.firebase.google.com/u/0/project/trainchoochoo-bf5aa/overview
 var firebaseConfig = {
  apiKey: "AIzaSyC17ZZXUarCukg4XE2z6FW-agdzSPuIDx8",
  authDomain: "trainn-3caa9.firebaseapp.com",
  databaseURL: "https://trainn-3caa9.firebaseio.com",
  projectId: "trainn-3caa9",
  storageBucket: "trainn-3caa9.appspot.com",
  messagingSenderId: "232460108443",
  appId: "1:232460108443:web:1fc5ac90d79e9690bffc3e",
  measurementId: "G-MK7KL0GRRQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#formID").on("submit", function (event) {
    event.preventDefault();

    var name = $("#trainName").val().trim();
    var destination = $("#trainDestination").val().trim();
    var firstTime = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
      name: name,
      destination: destination,
      firstTime: firstTime,
      frequency: frequency
    });

    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");

    return false;
  });
