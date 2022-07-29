var currentDayEl = $('#currentDay');
var currentTimeEL = moment().format('H HH');
var task = document.querySelector('.entry');
var saveButton = document.querySelector('.saveBtn');
var note = document.getElementById("note");
var save = document.getElementById("save");

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