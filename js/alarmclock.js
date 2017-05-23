function AlarmClock(currentTime, alarmTime) {
  this.currentTime = currentTime;
  this.alarmTime = alarmTime;
}

AlarmClock.prototype.soundAlarm = false;

AlarmClock.prototype.alarmListener = function() {
  if (this.currentTime === this.alarmTime) {

  }
}
