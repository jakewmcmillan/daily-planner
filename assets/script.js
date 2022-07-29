var currentDayEl = $('#currentDay');
var currentTimeEL = moment().format('H HH');
var task = document.querySelector('.entry');
var saveButton = document.querySelector('.saveBtn');
var note = document.getElementById("note");
var save = document.getElementById("save");

var nineOclock = document.getElementById("hour-1");
var tenOclock = document.getElementById("hour-2");
var elevenOclock = document.getElementById("hour-3");
var twelveOclock = document.getElementById("hour-4");
var oneOclock = document.getElementById("hour-5");
var twoOclock = document.getElementById("hour-6");
var threeOclock = document.getElementById("hour-7");
var fourOclock = document.getElementById("hour-8");
var fiveOclock = document.getElementById("hour-9");
var timeBlocks = [nineOclock, tenOclock, elevenOclock, twelveOclock, oneOclock, twoOclock, threeOclock, fourOclock, fiveOclock];

function displayTime() {
    var rightNow = moment().format('LLLL');
    currentDayEl.text(rightNow);
}

save.onclick = function() {
    var reminder = note;
    
    localStorage.setItem(reminder);
    location.reload();

};
for (let i=0; i < localStorage.length; i++) {
    var reminder = localStorage.key(i)
    var value = localStorage.getItem(reminder);
}

(setInterval(displayTime, 1000));