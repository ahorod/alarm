function update() {
  $("#current-time").html(moment().format('h:mm:ss'));
}

$(document).ready(function(){
  setInterval(update, 1000);
});
