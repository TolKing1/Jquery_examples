$(document).ready(function () {
    const $modal = $(".popup");
    const $overlay = $('.overlay')
    const $btn = $(".btn");
    const $close = $('.close-btn');
    const $phone = $('.phone')

    $btn.click(function(){
        $overlay.fadeIn();
        $modal.addClass('popup_active')
        $($phone).html($(this).html())
    })
    $close.click(function(){
        $overlay.fadeOut();
        $modal.removeClass('popup_active')

    })
});