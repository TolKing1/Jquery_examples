$(document).ready(function () {
    $('.input-cart-number').on('input',function(){
        $(".number span:nth-child("+$(this).index()+")").html($(this).val());
        if($(this).val().length > 3){
            $(this).next().focus();
        }else if($(this).val().length < 1){
            $(this).prev().focus()
        }
    })
    $("#card-holder").on('input',function(){
        $('.nameHolder').html($(this).val());
    })
    $("#card-expiration-month").on('input',function(){
        $('.card-expiration-date .month').html($(this).val()+'/');
    })
    $("#card-expiration-year").on('input',function(){
        $('.card-expiration-date .year').html($(this).val());
    })
    $('#card-ccv').on('focus',function(){
        $('.credit-card-box').addClass('hover')
    }).on('blur',function(){
        $('.credit-card-box').removeClass('hover')
    }).on('input',function(){
        $('.ccv .ccv__space').html($(this).val())
    })
})