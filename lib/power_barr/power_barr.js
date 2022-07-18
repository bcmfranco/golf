// Helper vars
var pause = true; //is counter paused
var range = ['0.2', '0.4', '0.6', '0.8', '1'];


// Helper functions

function spin() {

  var spike = -1;
  var spiker = setInterval(counter, 500);

  function counter() {
    if (!pause) { //do something if not paused
        spike = spike+1;

        if (spike >= range.length) {
            console.log("hi");
            spike = 0;
        }
        $$("#pb_spiker").set('html', range[spike]);
        $$('#pb_barr').setStyle('opacity', range[spike]);
    }
  }

}

// Events
$$('#pb_start').addEvent('click', function () {
    if(pause){
        pause = false;
    } else {
        pause = true;
    }
});

// Course
spin();
