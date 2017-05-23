$(document).ready(function(){
  $("#current-time").text(moment());
  $('#set-alarm').submit(function(event){
    event.preventDefault();

  });
});
