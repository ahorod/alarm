var AlarmClock = require('./../js/alarmclock.js').alarmClockModule;
var alarmClock = new AlarmClock();

$(document).ready(function(){
  $('#set-alarm').submit(function(event){
    event.preventDefault();

    var inputtedTime = $("#alarm-time").val();
    var alarmClock = new AlarmClock(inputtedTime, false);


    setInterval(function() {
      var currentTime = (moment().format('h:mm'));


      if (alarmClock.alarmTime === currentTime) {
        // alert('alarm')
        $("#cat").show();
      }

    }, 1000);
  });
});

function update() {
  $("#current-time").html(moment().format('h:mm:ss'));
}

$(document).ready(function(){
  setInterval(update, 1000);
});
