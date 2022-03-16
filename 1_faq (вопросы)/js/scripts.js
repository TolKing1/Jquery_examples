$(document).ready(function(){
    $(".ask").on("click",function(){
        $(this).next().slideToggle(100)
        $(".ask").not(this).next().slideUp();
    })
})