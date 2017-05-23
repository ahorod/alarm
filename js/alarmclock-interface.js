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
