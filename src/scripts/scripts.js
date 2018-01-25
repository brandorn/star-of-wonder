$(document).ready(function() {

// Adds image class to singles with images
$('.singles-list li').has('img').closest('li').addClass('has-image');

// Interleave annotations
// data-ids on the annotations
$.each($('.annotation-link'), function (index, item) {
  $(item).attr('data-id', (index+1));
});
$.each($('.annotation'), function (index, item) {
  $(item).attr('data-id', (index+1));
});

// Clicking an annotation link expands/collapses the annotation.
$('.annotation-link').click(function() {
  var annotationLinkId = $(this).data('id');
  var annotationContainer = $('.annotation[data-id=' + annotationLinkId + ']');

  if ($(this).hasClass('annotation-link-selected')) {
    $(this).removeClass('annotation-link-selected');
    annotationContainer.removeClass('annotation-expanded');
    setTimeout(function(){
      annotationContainer.removeClass('annotation-displayed');
    }, 300);
  } else {
    $(this).addClass('annotation-link-selected');
    annotationContainer.addClass('annotation-displayed');
    setTimeout(function(){
      annotationContainer.addClass('annotation-expanded');
    }, 100);
  }
  return false;
});

// Clicking the content of an annotation collapses it, too.
$('.annotation > span').click(function() {
  var annotationContainer = $(this).parent()
  var annotationId = annotationContainer.data('id')
  var annotationLink = $('.annotation-link[data-id=' + annotationId + ']')
  var textSelected = window.getSelection().type === "Range"
  
  if (!textSelected && $(this).parent().hasClass('annotation-displayed')) {
    annotationLink.removeClass('annotation-link-selected');
    annotationContainer.removeClass('annotation-expanded');
    setTimeout(function(){
      annotationContainer.removeClass('annotation-displayed');
    }, 300);
  };
});


// SimpleLightbox init (http://dbrekalo.github.io/simpleLightbox/)
// Multiple inits in case of multiple lightboxes on the same page. Might only need one line.

$('.lightbox-1 a').simpleLightbox();
$('.lightbox-2 a').simpleLightbox();
$('.lightbox-2 a').simpleLightbox();




}); // document.ready();