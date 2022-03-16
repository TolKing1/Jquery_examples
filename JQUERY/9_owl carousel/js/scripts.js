$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        item:5,
        margin:10,
        loop:true,
        autoplayTimeout:1000,
        nav:true,
        responsive:{
            320:{
                item:1,
                nav:true,
            }
        }
        
        
    })
})