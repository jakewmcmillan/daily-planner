var currentDayEl = $('#currentDay');
var currentTimeEL = moment().format('LL');

function displayTime() {
    var rightNow = moment().format('LLLL');
    currentDayEl.text(rightNow);
}
(setInterval(displayTime, 1000));