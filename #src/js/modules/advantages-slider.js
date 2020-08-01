var mobileWidth = 767;
var currentWidth;

function doResize() {
  currentWidth = window.innerWidth;
  if (currentWidth <= mobileWidth) {
    $('.advantages__slider').slick({
      arrows: false,
      dots: true,
      appendDots: $(".advantages__toggles-wrapper"),
      centerMode: true,
      variableWidth: true
    });
  }
  else {
    $('.advantages__slider').slick('unslick');
  }
}

$(document).ready(function(){
  doResize();
  $(window).on('resize',  doResize);
});
