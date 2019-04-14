$(document).ready(function() {
var animation = true;
$(".toggle").click(function() {

  if (animation === true) {
    animation = false;
    $("#menu").toggleClass("hide");
    $("#wrapper").toggleClass("full");
    setTimeout(function () {
        $(".toggle").toggleClass("toggle_up");
        animation = true;
    }, 600);
  } else {

  }

});


});
