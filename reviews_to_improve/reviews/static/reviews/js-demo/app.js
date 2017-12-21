$(document).ready(function() {
  $('.progress').hide();
  $('#green-alert').hide();
  $('#blue-alert').hide();
  $('.jumbotron').hide();
});

$('#load').click(function() {
  $('#load').fadeOut();
  $('#blue-alert').delay(1000).fadeIn().delay(8000).fadeOut();
  $('.progress').delay(1000).fadeIn().delay(8000).fadeOut();
  $('#green-alert').delay(10000).fadeIn();
  $('.jumbotron').delay(10700).fadeIn();
  // commented out intentionally
});
