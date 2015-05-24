var main = function(){
    
    $("#menu-toggle").click(function (e) {
      // avatar enlarges
        if ( $("#avatar").attr('src') == 'img/avatar-mini.png') {
            $("#avatar").attr('src', "img/avatar.jpg");
        } else {
            $("#avatar").attr('src', 'img/avatar-mini.png');
        }
      // avatar enlarges, sidebar menu pushed down 
        $(".sidebar-brand").toggleClass("large");
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
}

$(document).ready(main);
