$(document).ready(function(){
    let $links = $('.menu a');
    $links.click(function(e){
    e.prevetDefault();
    $links.removeClass('active')
    let id = $(this).addclass('active').attr('href');
    let XYZ = $(id).offset().top - 70;
    $('body,html').animate({
        scrollTop: XYZ,
    },1000)

    })
    
})