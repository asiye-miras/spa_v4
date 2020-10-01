jQuery(document).ready(function($) {

  //load_page("onload - ");

  window.onhashchange = function() {
    load_page("on hash value change - ");
  }

  function load_page(event_happen) {
    $("#loading_status_animation").show();
    var page_name = window.location.hash.substr(1);
    console.log(event_happen+page_name);
    if (page_name) {
      console.log("has hash value - " + page_name);
      $("#main_container").load(page_name + ".html",function(){
        $("#loading_status_animation").hide();
      });
    } else {
      console.log("no hash value");
      $("#main_container").load("home.html",function(){
        $("#loading_status_animation").hide();
      });
    }
  }

});
