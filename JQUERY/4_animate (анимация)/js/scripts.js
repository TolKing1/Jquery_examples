// $(document).ready(function(){
//     $('.answer').on('click',function(){
//         $(this).animate({
//             opacity:0.5,
//             width:'200px',
//             height:'150px',
//             marginLeft:'100px',
//         },1000).animate({
//             opacity:0.5,
//             width:'300px',
//             height:'200px',
//             marginLeft:'150px',
//         },1000).animate({
//             opacity:0.5,
//             width:'300px',
//             height:'200px',
//             marginLeft:'200px',
//         },1000)
//     })
// })
$(document).ready(function(){
        $('.btn').on('click',function(){
            $('.wrap').animate({
                borderRadius:'50%',
                width:'150px',
                height:'150px',
                 
            },1000).animate({
                borderRadius:'50%',
                width:'200px',
                height:'200px',
               
            },1000).animate({
                borderRadius:'50%',
                width:'100px',
                height:'100px',
               
            },1000)
        })
    })