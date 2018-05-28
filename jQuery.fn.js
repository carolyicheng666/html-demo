// jQuery 开发插件的几种方式



// 初级，通过$.extend()来扩展jQuery
;(function($, window, document, undefined){
  $.fn.extend({
    highlight: function(options) {
      // 合并默认值和用户设定值:
      var opts = $.extend({}, defaults, options||{});
      return this.css('backgroundColor', opts.backgroundColor).css('color', opts.color);
    }
  })
  // 设定默认值:
  var defaults = {
    color: '#659f13',
    backgroundColor: '#f2fae3'
  }
})(jQuery, window, document);



// 中级，通过$.fn 向jQuery添加新的方法
// 基本模式
;(function($, window, document, undefined) {
  $.fn.myPlugin = function(options) {
    var defaults = {
      'color': 'red',
      'fontSize': '24px'
    };
    var settings = $.extend({}, defaults, options||{});
    return this.css({
      'color': settings.color,
      'fontSize': settings.fontSize
    });
  }
})(jQuery, window, document);


// 面向对象
;(function($, window, document, undefined) {
  var page = function(element, options) {
    this.element = element;
    this.defaults = {
      'color': 'red',
      'fontSize': '30px',
      'textDecoration':'none'
    };
    this.options = $.extend({}, this.defaults, options||{});
  }

  page.prototype = {
    init: function() {
      return this.element.css({
        'color': this.options.color,
        'fontSize': this.options.fontSize,
        'textDecoration': this.options.textDecoration
      });
    }
  }

  $.fn.myPlugin = function(options) {
    return new page(this, options).init();
  }
})(jQuery, window, document);


// 单例模式面向对象
;(function($, window, document, undefined) {
  var page = (function() {
    function page(element, options) {
      this.options = $.extend({}, $.fn.myPlugin.defaults, options||{});
      this.element = element;
      this.init();
    }

    page.prototype = {
      init: function() {
        return this.element.css({
          'color': this.options.color,
          'fontSize': this.options.fontSize,
          'textDecoration': this.options.textDecoration
        });
      }
    };

    return page;
  })();

  $.fn.myPlugin = function(options){
    return this.each(function(){
      var me = $(this),
        instance = me.data("page");

      if(!instance){
        me.data("page", (instance = new page(me, options)));
      }

      if($.type(options) === "string") return instance[options]();
    });
  };

  $.fn.myPlugin.defaults = {
    'color': 'red',
    'fontSize': '30px',
    'textDecoration':'none'
  };

  // 内部调用
  $(function() {
    $('a').myPlugin();
  })
})(jQuery, window, document);



// 高级，使用 $.widget()