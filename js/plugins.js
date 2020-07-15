$(document).ready(function(){  
    "use strict";
    $("html").niceScroll();
    $('.carousel').carousel({
        interval:6000
    });
    
  
   });
//Loading Screen
//Show  Color Option When Click On The Gear

$(".gear-check").click(function(){
   
    $(".color-option").fadeToggle();
});

//Change Theme Color On CLick
var colorLi = $(".color-option ul li"); 
colorLi.
 eq(0).css("backgroundColor" , "#E41B17").end()
  .eq(1).css("backgroundColor" , "#E426D5").end()
 .eq(2).css("backgroundColor" , "#009AFF").end()
 .eq(3).css("backgroundColor" , "#FFF500");
colorLi.click(function(){
   
    $("link[href*='theme']").attr("href",$(this).attr("data-value"));
    
   //console.log($(this).attr("data-value")); 
    
});

$(window).on('load', function (e) {
   $(".overlay-loading .spinner").fadeOut(2000,function(){
                      $("body").css("overflow","auto");    

       $(this).parent().fadeOut(2000,function(){
   
           $(this).remove();
       });
   });
});

//FAQ


// scroll top
var scrollButton = $("#scroll-top");

$(window).scroll(function(){

if($(this).scrollTop()>=700){
    scrollButton.show();
}  
    else{
        scrollButton.hide();
    }
  
    });
  scrollButton.click(function(){
       
        $("html,body").animate({scrollTop:0},600);
    });
        