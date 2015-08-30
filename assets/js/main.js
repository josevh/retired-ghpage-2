$(document).ready(function(){
    
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    $('#myTab > li').click(function () {
        switch ($(this).children('a').attr('href')) {
            case '#about':
                $('body').css('background-image', 'url(http://c3.staticflickr.com/3/2934/14578335119_f6d461865f_h.jpg)');
                break;
            case '#profile':
                $('body').css('background-image', 'url(https://farm2.staticflickr.com/1099/5144658094_0c398dff61_o.jpg)');
                break;
            case '#portfolio':
                $('body').css('background-image', 'url(https://farm5.staticflickr.com/4016/4576077203_af85ec5163_o.jpg)');
                break;
            case '#contact':
                $('body').css('background-image', 'url(https://farm3.staticflickr.com/2686/4438624473_2ef3b3a772_o.jpg)');
                break;
            default:
                // code
        }
    });
});