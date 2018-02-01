/* bad */
$.fn.myPluginName1 = function() {
  ...
}
$.fn.myPluginName2 = function() {
  ...
}


/* good */
/* 1 */
(function($) {
  $.fn.myPluginName1 = function() {
    ...
  };
  $.fn.myPluginName2 = function() {
    ...
  };
})(jQuery);

/* 2 */
(function($) {
  $.extend($.fn, {
    myPluginName1: function() {
      ...
    },
    myPluginName2: function() {
      ...
    }
  });
})(jQuery);