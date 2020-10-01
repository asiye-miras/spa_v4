jQuery(document).ready(function($){
 
$('.red-button').on({
     'click': function(){
       //Toggle whole slide show and hide
        $("#slide-2").hide();
        $("#slide-3").hide();
        $("#slide-1").fadeIn(1500);
        //Toggle slide text content
        $(".content").hide();
        $("#slide-1>div").slideDown();
     }
 });
 
$('.blue-button').on({
     'click': function(){
        $("#slide-1").hide();
        $("#slide-3").hide(); 
        $("#slide-2").fadeIn(1500);
         //Toggle slide text content
        $(".content").hide();
        $("#slide-2>div").slideDown();
     }
 });
 
$('.yellow-button').on({
     'click': function(){
       $("#slide-3").fadeIn(1500);
         $("#slide-1").hide();
         $("#slide-2").hide();
         //Toggle slide text content
        $(".content").hide();
        $("#slide-3>div").slideDown();
         
     }
 });
});// Add your code here

