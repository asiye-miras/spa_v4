jQuery(document).ready(function($) {

  $('.red-button').on({
    'click': function() {
      $('#change-image').attr('src', 'https://wpbeaches.com/wp-content/uploads/2018/09/red.jpg');
      $("#title").text("Red");
      $("#text").text("Red");

    }
  });

  $('.blue-button').on({
    'click': function() {
      $('#change-image').attr('src', 'https://wpbeaches.com/wp-content/uploads/2018/09/blue.jpg');
      $("#title").text("Blue");
      $("#text").text("Blue");
    }
  });

  $('.yellow-button').on({
    'click': function() {
      $('#change-image').attr('src', 'https://wpbeaches.com/wp-content/uploads/2018/09/yellow.jpg');
      $("#title").text("Yellow");
      $("#text").text("Yellow");

    }
  });
});
