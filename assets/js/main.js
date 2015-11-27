$(document).ready(function(){
    
    $("#credit i").click(function(){
        var credit = 'Design derivative of <a href="http://www.blacktie.co/2013/10/victoria-simple-vcard/" target="_blank" >Victora Simple vCard</a> by <a href="http://www.blacktie.co/" target="_blank">BlackTie.co</a> used under <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">CC BY 3.0</a>.';
        $(this).parent('p').html(credit);
    });
    
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
    
    // lazy load portfolio images
    setTimeout(function(){
        $('img[data-lazy-src]').each(function() {
            $(this).attr('src', $(this).attr('data-lazy-src'));
        });
    }, 2000);
    
    
    
    // $('#myTab > li').click(function () {
    //     if ($( window ).width() >= 768) {
    //         switch ($(this).children('a').attr('href')) {
    //             case '#about':
    //                 $('body').css('background-image', 'url(assets/img/gc1-min.jpg)');
    //                 break;
    //             case '#profile':
    //                 $('body').css('background-image', 'url(assets/img/mac-min.jpg)');
    //                 break;
    //             case '#portfolio':
    //                 $('body').css('background-image', 'url(assets/img/desk-min.jpg)');
    //                 break;
    //             case '#contact':
    //                 $('body').css('background-image', 'url(assets/img/rain-min.jpg)');
    //                 break;
    //             default:
    //                 $('body').css('background-image', 'url(assets/img/gc1-min.jpg)');
    //         }    
    //     }
        
    // });
});

// $(window).load(function() {
//       preload([
//     // 'assets/img/gc1-min.jpg',
//     'assets/img/rain-min.jpg',
//     'assets/img/mac-min.jpg',
//     'assets/img/peacock1-min.jpg'
//     ]);
// });

// function preload(arrayOfImages) {
//     $(arrayOfImages).each(function(){
//         // $('<img/>')[0].src = this;
//         // Alternatively you could use:
//         (new Image()).src = this;
//     });
// }