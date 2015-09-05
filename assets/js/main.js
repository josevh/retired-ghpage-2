$(document).ready(function(){
    
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    $('#myTab > li').click(function () {
        switch ($(this).children('a').attr('href')) {
            case '#about':
                $('body').css('background-image', 'url(assets/img/gc1-min.jpg)');
                break;
            case '#profile':
                $('body').css('background-image', 'url(assets/img/gap1-min.jpg)');
                break;
            case '#portfolio':
                $('body').css('background-image', 'url(assets/img/mac-min.jpg)');
                break;
            case '#contact':
                $('body').css('background-image', 'url(assets/img/peacock1-min.jpg)');
                break;
            default:
                // code
        }
    });
});

$(window).load(function() {
      preload([
    // 'assets/img/gc1-min.jpg',
    'assets/img/gap1-min.jpg',
    'assets/img/flower1-min.jpg',
    'assets/img/peacock1-min.jpg'
    ]);
});

function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        // $('<img/>')[0].src = this;
        // Alternatively you could use:
        (new Image()).src = this;
    });
}