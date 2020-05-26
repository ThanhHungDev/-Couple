
module.exports = function($, $animations) {

  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animations, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    //check to see if this current container is within viewport
    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.removeClass("animated-initial");
    } else {
      $element.addClass("animated-initial");
    }
  });
}