$(document).ready(function(){
    $('.hide').click(function(){
        $('section').slideUp();
        $('footer').fadeOut(1000);
        
    })
    $('.show').click(function(){
        $('section').slideDown();
        $('footer').fadeIn(2000);
        
    })
})