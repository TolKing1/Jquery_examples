// $(document).ready(function () {
//     filterColor = (color) => {
//         $(".color").filter('.'+color).slideDown();
//         $(".color").not('.'+color).slideUp();
//     }
//     $(".f-green").click(function () { 
        
//         filterColor("green");
//     });
//     $(".f-red").click(function () { 
        
//         filterColor("red");
//     });
//     $(".f-blue").click(function () { 
        
//         filterColor("blue");
//     });
//     $('.f-all').click(function(){
//         $(".color").slideDown();
//     })
// });
window.addEventListener('load',function(){
    filterColor = function (color) {
        let body = document.querySelectorAll('.color');
        let active = document.querySelector('.'+color);
        console.log(body);
        console.log(active);
        
        
        for (let i = 0; i < key > body.length; i++) {
            
            console.log(body[active]);
            
        }
        
        
    }   
        document.querySelector('.f-red').addEventListener('click',function () { 
            filterColor('red')
        })
        document.querySelector('.f-blue').addEventListener('click',function () { 
            filterColor('blue')
        })
        document.querySelector('.f-green').addEventListener('click',function () { 
            filterColor('green')
        })
    
})