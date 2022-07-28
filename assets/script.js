var currentDayEl = $('#currentDay');
var currentTimeEL = moment().format('LL');
var task = document.querySelector('.entry');
var saveButton = document.querySelector('.saveBtn');
var note = document.getElementById("note");
var save = document.getElementById("save");

function displayTime() {
    var rightNow = moment().format('LLLL');
    currentDayEl.text(rightNow);
}



(setInterval(displayTime, 1000));