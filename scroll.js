//  $(function() {
//     $('a[href*=#]:not([href=#])').click(function() {
//         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

//             var target = $(this.hash);
//             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//             if (target.length) {
//                 $('html,body').animate({
//                     scrollTop: target.offset().top
//                 }, 1000);
//                 return false;
//             }
//         }
//     });
// });


// (function (jQuery) {
//   jQuery.mark = {
//     jump: function (options) {
//       var defaults = {
//         selector: 'a.scroll-on-page-link'
//       };
//       if (typeof options == 'string') {
//         defaults.selector = options;
//       }

//       options = jQuery.extend(defaults, options);
//       return jQuery(options.selector).click(function (e) {
//         var jumpobj = jQuery(this);
//         var target = jumpobj.attr('href');
//         var thespeed = 1000;
//         var offset = jQuery(target).offset().top;
//         jQuery('html,body').animate({
//           scrollTop: offset
//         }, thespeed, 'swing');
//         e.preventDefault();
//       });
//     }
//   };
// })(jQuery);


// jQuery(function(){
//   jQuery.mark.jump();
// });
