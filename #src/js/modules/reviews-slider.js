/* var reviewsButtonsResize = function() {
  var reviewsButtonPrev = $(".reviews__buttons-wrapper .slick-prev");
  var reviewsButtonNext = $(".reviews__buttons-wrapper .slick-next");
  var reviewsSlide = $(".reviews__slider .slick-track");
  reviewsButtonPrev.outerHeight(reviewsSlide.height());
  reviewsButtonNext.outerHeight(reviewsSlide.height());
}
*/

$(document).ready(function(){
  $(".reviews__slider").slick({
    variableWidth: true,
    appendArrows: $(".reviews__buttons-wrapper"),
    dots: true,
    appendDots: $(".reviews__toggles-wrapper"),
    centerMode: true,
    slidesToShow: 1
  });
});



