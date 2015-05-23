/*jslint browser: true*/
/*global $ */

$("#menu-toggle").click(function (e) {
  // toggle show/hide sidebar
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

  // sidebar arrow toggle direction
    if ( $("#menu-toggle-icon").hasClass("glyphicon glyphicon-menu-right") ) {
      $("#menu-toggle-icon").removeClass("glyphicon glyphicon-menu-right").addClass("glyphicon glyphicon-menu-left");
    } else {
      $("#menu-toggle-icon").removeClass("glyphicon glyphicon-menu-left").addClass("glyphicon glyphicon-menu-right");
    }
});

$(document).ready(function(){

});
