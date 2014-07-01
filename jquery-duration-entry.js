(function($){

  $.fn.durationEntry = function(options){

    return this.each(function(){

      var $el = $(this);
      var $hours = $($el.data("duration-hours"));
      var $minutes = $($el.data("duration-minutes"));
      var $seconds = $($el.data("duration-seconds"));

      var calculator = {

        init: function(){
          $el.hide();
          this.events(calculator);
          this.updateFromTotalSeconds();
        },

        events: function(calculator){

          $el.on('change', function(e){
            calculator.updateFromTotalSeconds();
          });

          $hours.add($minutes).add($seconds).on('change', function(e){
            calculator.updateFromFields();
          });

        },

        updateFromTotalSeconds: function(){
          var duration = moment.duration(parseInt($el.val()), 'seconds');

          $hours.val(parseInt(duration.asHours()));
          $minutes.val(duration.minutes());
          $seconds.val(duration.seconds());
        },

        updateFromFields: function(){
          var duration = moment.duration({
            hours: $hours.val(),
            minutes: $minutes.val(),
            seconds: $seconds.val()
          })

          $el.val(duration.asSeconds());
        }

      }

      calculator.init();

    });
  };

}(jQuery));
