(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {

            //// Place your code here.
            //  $(document).ready(function() {
                  $("p").click(function() {
                      alert("You clicked a paragraph.");
                  });
            //  });
        }
    };


})(jQuery, Drupal, this, this.document);