(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function AlarmClock(alarmTime, soundAlarm) {
  this.alarmTime = alarmTime;
  this.soundAlarm = soundAlarm;
}

// AlarmClock.prototype.alarmListener = function(currentTime) {
//   if (this.alarmTime === currentTime) {
//     this.soundAlarm = true;
//     return true;
//   }
// }

exports.alarmClockModule = AlarmClock;

},{}],2:[function(require,module,exports){
var AlarmClock = require('./../js/alarmclock.js').alarmClockModule;
var alarmClock = new AlarmClock();

$(document).ready(function(){
  $('#set-alarm').submit(function(event){
    event.preventDefault();

    var inputtedTime = $("#alarm-time").val();
    var alarmClock = new AlarmClock(inputtedTime, false);

    console.log(alarmClock.alarmTime);

    setInterval(function() {
      var currentTime = (moment().format('HH:mm'));
      console.log(currentTime);


      if (alarmClock.alarmTime === currentTime) {
        // alert('alarm')
        $("#cat").show();
      }

    }, 1000);
    $('#snooze').click(function(){
      alert('snooze')
      var alarm = alarmClock.alarmTime();
      console.log(alarmClock.alarmTime());
      var alarmSplit = alarm.split(":");
      console.log(alarmSplit);
      var alarmHour = alarmSplit[0];
      var alarmMin = parseInt(alarmSplit[1]);

      var newAlarmMin = (alarmMin + 1).toString();
      var newAlarmTime = alarmHour.concat(newAlarmMin);
      console.log(newAlarmTime)
      setInterval(function() {
        var currentTime = (moment().format('h:mm'));

        if (newAlarmTime === currentTime) {
          // alert('alarm')
        alert('get UP')
        }

      }, 1000);

    });
  });

});

function update() {
  $("#current-time").html(moment().format('h:mm:ss'));
}

$(document).ready(function(){
  setInterval(update, 1000);
});

},{"./../js/alarmclock.js":1}]},{},[2]);
