jQuery(document).ready(function($){

var first_time_clicked = false;

$('.red-button').on({
     'click': function(){
       //Toggle whole slide show and hide
        $("#slide-2").hide();
        $("#slide-3").hide();

        if (first_time_clicked == false) {
          $("#slide-1").slideDown(1500);
          first_time_clicked = true;
        }else{
          $("#slide-1").fadeIn("slow");
        }
        
        //Toggle slide text content
        $(".content").hide();
        $("#slide-1>div").slideDown();
     }
 });
 // Close mark action
 $('.closemark').on({
    'click': function(){
      $("#slide-1").slideUp();
      $("#slide-2").slideUp();
      $("#slide-3").slideUp(); 
      first_time_clicked = false;
    }
  });   

$('.blue-button').on({
     'click': function(){
        $("#slide-1").hide();
        $("#slide-3").hide();
        if (first_time_clicked == false) {
          $("#slide-2").slideDown(1500);
          first_time_clicked = true;
        }else{
          $("#slide-2").fadeIn("slow");
        } 
         //Toggle slide text content
        $(".content").hide();
        $("#slide-2>div").slideDown();
     }
 });
 
$('.yellow-button').on({
     'click': function(){
       if (first_time_clicked == false) {
          $("#slide-3").slideDown(1500);
          first_time_clicked = true;
        }else{
          $("#slide-3").fadeIn("slow");
        } 
         $("#slide-1").hide();
         $("#slide-2").hide();
         //Toggle slide text content
        $(".content").hide();
        $("#slide-3>div").slideDown();
         
     }
 });
});