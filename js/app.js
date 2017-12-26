/* Vista splash */
$(document).ready(function() {
  $nav = $('.navbar-brand');
  $nav.css('color', '#B9763A');
  $nav.css('fontSize', '2.5em')
  $navb = $('.navbar');
  $navb.after('');
  $navb.css('color', '#fff');


  setTimeout(function() {
    $('#splash').fadeOut(300);
 }, 3000);
});