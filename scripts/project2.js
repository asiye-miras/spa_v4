jQuery(document).ready(function($){
 
$('.red-button').on({
     'click': function(){
         $("#slide-1").show();
         $("#slide-2").hide();
         $("#slide-3").hide();
     }
 });
 
$('.blue-button').on({
     'click': function(){
         $("#slide-1").hide();
         $("#slide-2").show();
         $("#slide-3").hide();   
     }
 });
 
$('.yellow-button').on({
     'click': function(){
         $("#slide-1").hide();
         $("#slide-2").hide();
         $("#slide-3").show();
     }
 });
});