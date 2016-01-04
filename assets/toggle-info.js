var main=function(){
  $('.nav,.info').click(function(){
    $('.info').animate({
      height: "toggle",
      opacity: "toggle"
    })
  })
};

$(document).ready(main); 
