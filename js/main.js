$(document).ready(function() {
  $("#main-title h1").lettering('words');
  $("#main-title h2").lettering('words');
  $("#main-title p").lettering('words');

  $("#contact h1").lettering('words').children('span').lettering();

  $("#design-in-browser h1").lettering('words');
  $("#design-in-browser .medium").lettering('words');
  $("#design-in-browser .present").lettering('words');

  $("#what-are-we-designing h1").lettering('words').children('span').lettering();
  $("#what-are-we-designing .fragment").lettering('lines').children('span').lettering('words');

  $("#style-guides h1").lettering('words');

  $("#bad-style-guides h1").lettering('words');

  $("#as-design-tool h1").lettering('words');

  $("#organizing-aesthetics h1").lettering('words');

  $("#musical-thinking h1").lettering('words').children('span').lettering();

  $("#content-first-design h1").lettering('words').children('span').lettering('words');

  $("#component-second h1").lettering('words');

  $("#aesthetic-foundation h1").lettering('words');

  $("#find-typeface h1").lettering('words');

  $("#modular-scale h1").lettering('words').children('span').lettering();

  $("#color-schemer h1").lettering('words').children('span').lettering();

  $("#teams p").lettering();
});
