// $(document).ready(function () {
//     const $links = $('.nav a');
//     $links.click(function(event){
//         event.preventDefault();
//         $links.parent().removeClass('active');
//         $(this).parent().addClass('active');

//         const $section = $(this).attr('href');
//         $('.tab-pane').removeClass('active');
//         $($section).addClass('active')
//     })
// });



window.addEventListener('load',function(){
    let links = document.querySelectorAll('.nav li a');
    let text = this.document.querySelectorAll('.tab-pane')    
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click',function(e){
            e.preventDefault();
            for (let ind = 0; ind < links.length; ind++) {
                links[ind].parentElement.classList.remove("active");
                text[ind].classList.remove('active');
            }
            this.parentElement.classList.add('active');
            
            let section = this.getAttribute('href')
            document.querySelector(section).classList.add('active')
            
        })
        
    }
})