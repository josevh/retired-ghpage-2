/*jslint browser: true*/
/*global $ */
                  
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    $("#sidebar-wrapper").toggleClass("toggled");
});

$(document).ready(function(){
    
});