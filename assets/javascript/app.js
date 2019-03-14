// INITIALIZE FIREBASE
var config = {
  apiKey: "*check file on local machine",
  authDomain: "*check file on local machine",
  databaseURL: "*check file on local machine",
  projectId: "*check file on local machine",
  storageBucket: "*check file on local machine",
  messagingSenderId: "*check file on local machine"
};
firebase.initializeApp(config);

// CONNECT MY DATABASE TO FIREBASE DATABASE
var database = firebase.database();

// BUTTON FOR ADDING EMPLOYEES
$("#addTrain-btn"),on("click", function(event) {
  event.preventDefault();
})
  // GRAB USER INPUT
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var trainTime = moment($("#time-input").val().trim(), "HH:MM:SS")
  var frequency = $("#frequency-input").val().trim();
  // CREATE LOCAL "TEMPORARY" OBJECT FOR HOLDING TRAIN DATA
  var newTrain = {
    name: trainName,
    place: destination,
    time: trainTime,
    freq: frequency
  };

  // UPLOAD TRAIN DATA TO THE DATABASE
  database.ref().push(newTrain);
  // LOGS EVERYTHING TO CONSOLE
  console.log(newTrain.name);
  console.log(newTrain.place);
  console.log(newTrain.time);
  console.log(newTrain.freq);

  alert("train successfully added");
  // CLEAR ALL OF THE TEXT BOXES
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");
// CREATE FIREBASE EVENT FOR ADDING TRAIN TO THE DATABASE AND A ROW IN THE HTML WHEN A USER ADDS AN ENTRY
database.ref().on("child_added", function(chilcSnapshot) {
  console.log(childSnapshot.val());
  // STORE EVERYTHING INTO A VARIABLE
  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().place;
  var trainTime = childSnapshot.val().time;
  var frequency = childSnapshot.val().freq;
  // TRAIN INFO
  console.log(trainName);
  console.log(destination);
  console.log(trainTime);
  console.log(frequency);
  // PRETTIFY THE TRAIN START
  var trainStartPretty = moment.unix(trainTime).format(HH:MM:AM/PM);
  

  // CREATE THE NEW ROW
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(destination),
    $("<td>").text(trainTime),
    $("<td>").text(frequency),
    $("<td>").text(trainStartPretty),
  );
  // APPEND THE NEW ROW TO THE TABLE
  $("#train-table > tbody").append(newRow);
});
  

  

  

  
