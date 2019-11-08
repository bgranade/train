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
  database.ref().orderByChild("dateAdded").on("child_added", function (childSnapshot) {

    var updateButton = $("<button>").html("<span class='glyphicon glyphicon-edit'></span>").addClass("updateButton").attr("data-index", index).attr("data-key", childSnapshot.key);
    var removeButton = $("<button>").html("<span class='glyphicon glyphicon-remove'></span>").addClass("removeButton").attr("data-index", index).attr("data-key", childSnapshot.key);

    var firstTime = childSnapshot.val().firstTime;
  var tFrequency = parseInt(childSnapshot.val().frequency);
  var firstTrain = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTrain);
  console.log(firstTime);
  var currentTime = moment();
  var currentTimeCalc = moment().subtract(1, "years");
  var diffTime = moment().diff(moment(firstTrain), "minutes");
  var tRemainder = diffTime%tFrequency;
  var minutesRemaining = tFrequency - tRemainder;
  var nextTRain = moment().add(minutesRemaining, "minutes").format ("hh:mm A");
  var beforeCalc = moment(firstTrain).diff(currentTimeCalc, "minutes");
  var beforeMinutes = Math.ceil(moment.duration(beforeCalc).asMinutes());
