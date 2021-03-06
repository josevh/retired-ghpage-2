$(document).ready(function(){
    $('body').scrollspy({
        target: '#navbar',
        offset: 125
    })

    // Smooth Scrolling
    // http://codepen.io/mattsince87/pen/exByn
    // TODO: fix inconsistency with scrollspy
    function scrollNav() {
        $('.nav a').click(function(){
            //Toggle Class
            $(".active").removeClass("active");
            $(this).closest('li').addClass("active");
            var theClass = $(this).attr("class");
            $('.'+theClass).parent('li').addClass('active');
            //Animate
            $('html, body').stop().animate({
                scrollTop: $( $(this).attr('href') ).offset().top - 70
            }, 400);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();

    // lazy load project images
    setTimeout(function(){
        $('img[data-lazy-src]').each(function() {
            $(this).attr('src', $(this).attr('data-lazy-src'));
        });
    }, 2000);

    // activate tooltips
    $('[data-toggle="tooltip"]').tooltip();
    // show tooltips on hover
    $('[data-toggle="tooltip"]').hover(function(){
        $(this).tooltip();
    });

    // collapsed navbar: hide on click
    $('.nav a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });
});

/* Google Maps callback function */
window.initMap = function() {
    var var_location = new google.maps.LatLng(34.0799731,-118.2936974);

    var var_mapoptions = {
        center: var_location,
        zoom: 12
    };

    // var var_marker = new google.maps.Marker({
    //     position: var_location,
    //     map: var_map,
    //     title:"Hollywood"});
    // var_marker.setVisible(false);

    var var_map = new google.maps.Map(document.getElementById("map-container"),
    var_mapoptions);

    // var_marker.setMap(var_map);

    }
    //  google.maps.event.addDomListener(window, 'load', init_map);
