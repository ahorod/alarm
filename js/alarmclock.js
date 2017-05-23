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
