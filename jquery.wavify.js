/*
 *   Wavify
 *   Jquery Plugin to make some nice waves
 *   by peacepostman @ potion
 */
(function($) {
  $.fn.wavify = function(options) {
    if ("function" !== typeof wavify) {
      console.error(
        "wavify is not a function. Be sure to include 'wavify.js' before you include 'jquery.wavify.js'."
      );
      throw "Error: wavify is not a function";
    }

    return wavify(this, options);
  };
})(jQuery);
