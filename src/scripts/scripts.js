$(document).ready(function() {

// Popover annotations on song lyrics

  $('.annotation-link').focus(function(){
    $(this).addClass("annotation-active");
  }); 

  $('.annotation-link').blur(function(){
    $(this).removeClass("annotation-active");
  }); 

  WebuiPopovers.setDefaultOptions({
    animation: 'fade',
  //  container: '.container',
    closeable: true,
    width: 500
  });

  // Use backdrop on mobile, !important to center, fix the annotation

  if ($(window).width() < 400) {
    WebuiPopovers.setDefaultOptions({
      arrow: false,
      backdrop: true,
      width: '340'
    });
  }
  else {
    WebuiPopovers.setDefaultOptions({
      backdrop: false,
      offsetLeft: 20,
      width: '400'
    });
  }


// slideBox carousel scripts



});