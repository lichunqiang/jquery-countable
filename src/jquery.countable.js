/*
 * countable
 * https://github.com/lichunqiang/jquery-countable
 *
 * Copyright (c) 2014 light
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.countable = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.countable = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.countable.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.countable.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].countable = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
