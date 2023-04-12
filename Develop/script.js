// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

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

// if time is before said hour set box color to green
//if time is within said hour like box be grey
// if time if after said hour let time be red

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
