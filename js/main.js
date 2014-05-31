$(document).ready(function() {
  $("#main-title h1").lettering('words');
  $("#main-title h2").lettering('words');
  $("#main-title p").lettering('words');

  $("#contact h1").lettering('words').children('span').lettering();

  $("#design-in-browser h1").lettering('words');
  $("#design-in-browser .medium").lettering('words');
  $("#design-in-browser .present").lettering('words');
});
