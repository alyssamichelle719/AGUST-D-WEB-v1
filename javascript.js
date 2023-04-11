// Menu Click to Toggle
$(document).ready(function(){
    $('.menu').click(function() {
      $('.nav').slideToggle("slide");
    });
});

$(document).ready(function(){
    $('.nav').click(function() {
      $('.nav').slideToggle("slide");
    });
});


//Buttons Click to Scroll 
$("#landingButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#landing")
    });
});

$("#aboutButton").click(function() {
    $('html, body').animate({
        scrollBottom: $("#about")
    });
});