var todayDate = $("#currentDay");
// id's for buttons for onclick functions
var saveBtn9 = $("#saveBtn9");
var saveBtn10 = $("#saveBtn10");
var saveBtn11 = $("#saveBtn11");
var saveBtn12 = $("#saveBtn12");
var saveBtn1 = $("#saveBtn1");
var saveBtn2 = $("#saveBtn2");
var saveBtn3 = $("#saveBtn3");
var saveBtn4 = $("#saveBtn4");
var saveBtn5 = $("#saveBtn5");

// current time
var time = dayjs().hour();
var textAreas = document.querySelectorAll(".description");

// This function displays the current time by day of month and year hour minute second
function date() {
  var timeInterval = setInterval(function () {
    var currentTime = dayjs().format("MMM DD, YYYY [at] hh:mm:ss a");
    todayDate.text(currentTime);
  }, 1000);
}
date();

// This function saves data into local storage once save button is pressed.
function saveData9() {
  saveBtn9.on("click", function () {
    var input = $("#textInput-9");
    localStorage.setItem("hour-9", input.val());
    console.log(input.val());
  });
}
saveData9();

function saveData10() {
  saveBtn10.on("click", function () {
    var input = $("#textInput-10");
    localStorage.setItem("hour-10", input.val());
    console.log(input.val());
  });
}
saveData10();

function saveData11() {
  saveBtn11.on("click", function () {
    var input = $("#textInput-11");
    localStorage.setItem("hour-11", input.val());
    console.log(input.val());
  });
}
saveData11();

function saveData12() {
  saveBtn12.on("click", function () {
    var input = $("#textInput-12");
    localStorage.setItem("hour-12", input.val());
    console.log(input.val());
  });
}
saveData12();

function saveData1() {
  saveBtn1.on("click", function () {
    var input = $("#textInput-1");
    localStorage.setItem("hour-1", input.val());
    console.log(input.val());
  });
}
saveData1();

function saveData2() {
  saveBtn2.on("click", function () {
    var input = $("#textInput-2");
    localStorage.setItem("hour-2", input.val());
    console.log(input.val());
  });
}
saveData2();

function saveData3() {
  saveBtn3.on("click", function () {
    var input = $("#textInput-3");
    localStorage.setItem("hour-3", input.val());
    console.log(input.val());
  });
}
saveData3();

function saveData4() {
  saveBtn4.on("click", function () {
    var input = $("#textInput-4");
    localStorage.setItem("hour-4", input.val());
    console.log(input.val());
  });
}
saveData4();

function saveData5() {
  saveBtn5.on("click", function () {
    var input = $("#textInput-5");
    localStorage.setItem("hour-5", input.val());
    console.log(input.val());
  });
}
saveData5();

for (var i = 0; i < textAreas.length; i++) {
  var currentTextArea = textAreas[i];
  var textAreaTime = parseInt(currentTextArea.getAttribute("data-time"));
  console.log(time);
  if (time < textAreaTime) {
    currentTextArea.classList.add("future");
  } else if (time > textAreaTime) {
    currentTextArea.classList.add("past");
  } else {
    currentTextArea.classList.add("present");
  }
}
