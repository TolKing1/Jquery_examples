$(document).ready(function(){
    $('ask').click(function(){
        let $answer = $(this).next();
        $('answer').not($answer).slideUp();
        $answer.slideTolggle(); 
    })
});