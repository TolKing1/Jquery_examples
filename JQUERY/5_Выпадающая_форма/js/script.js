$(document).ready(function(){
    $('#search').click(function(){
        $('.search').animate({
            top: 0,   
        },1000)
    })
    $('#search').click(function(){
        $('#close').animate({
            bottom: '-150px',   
        },1000)
    })
})