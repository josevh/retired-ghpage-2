/*jslint browser: true*/
/*global $ */

$("#menu-toggle").click(function (e) {
  // avatar enlarges
    $("#avatar").attr('src', 'img/avatar.jpg');
    $("#avatar").fadeIn('400');
    $("#avatar").toggleClass("large");
    
  // toggle show/hide sidebar
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");

  // sidebar arrow toggle direction
    if ( $("#menu-toggle button i").hasClass("fa-angle-double-right") ) {
      $("#menu-toggle button i").removeClass("fa-angle-double-right").addClass("fa-angle-double-left");
    } else {
      $("#menu-toggle button i").removeClass("fa-angle-double-left").addClass("fa-angle-double-right");
    }
    

});

$(document).ready(function(){

});
