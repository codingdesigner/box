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

  $("#simple-trick h1").lettering();


  var $font_classes = ["sans", "serif", "gothic", "slab", "slab-condensed", "script", "stencil"];
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function rotate_fonts(element) {
    var $current_index = $(element).attr('data-font-rotation');
    var $current_class = $font_classes[$current_index];
    $(element).removeClass($current_class);
    $current_index = ($current_index <= $font_classes.length - 2) ? ++$current_index : 0;
    $(element).attr('data-font-rotation', $current_index);
    $current_class = $font_classes[$current_index];
    $(element).addClass($current_class);
    $(element).attr('data-font-rotation', $current_index);
  }
  function start_rotate_fonts(element) {
    for(i = 0;i < $font_classes.length; i++) {
      $(element).removeClass($font_classes[i]).removeAttr("data-font-rotation");
    }
    $(element).attr('data-font-rotation', 0);
    $(element).each(function(i){
      this.font_interval = setInterval(rotate_fonts, getRandomInt(250, 750), $(this));
    });
  }
  function stop_rotate_fonts(element) {
    for(i = 0;i < $font_classes.length; i++) {
      $(element).removeClass($font_classes[i]).removeAttr("data-font-rotation");
    }
    $("#find-typeface h1 span").each(function(i){
      clearInterval(this.font_interval);
    });
  }

  Reveal.addEventListener( 'slidechanged', function( event ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var $currentSlide_ID = $(event.currentSlide).attr("id");
    if ($currentSlide_ID === "find-typeface") {
      start_rotate_fonts($("#find-typeface h1 span"));
    } else {
      stop_rotate_fonts($("#find-typeface h1 span"));
    }
  } );

  Reveal.addEventListener( 'fragmentshown', function( event ) {
    // event.fragment = the fragment DOM element
    var $current_fragment_text = $(event.fragment).text();
    console.log($current_fragment_text);
    if ($current_fragment_text === "Typecast") {
      stop_rotate_fonts($("#find-typeface h1 span"));
    }
  } );

});
