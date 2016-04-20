$(document).ready(function(){
    $('body').scrollspy({ target: '#navbar' })

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
                scrollTop: $( $(this).attr('href') ).offset().top - 160
            }, 400);
            return false;
        });
        $('.scrollTop a').scrollTop();
    }
    scrollNav();
});
