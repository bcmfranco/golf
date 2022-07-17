// Helper vars
var slots = [1, 2, 3, 4, 5];


// Events
$$('#pb_stop').addEvent('click', function(){

    var stoped_slot =  $$('#pb_barr').get('html')[0];

    console.log(stoped_slot);

    var cancel = clearInterval(incrementSeconds, 1000);


    // Obtiene bien el stoped_slot
    // pero hay que hacer que detenga el fire event del start, para que los
    // slots dejen de pasarse

});


$$('#pb_start').addEvent('click', function(event){

    var current_slot = slots[0];

    function incrementSeconds() {
        var next_index = current_slot+1;
        if(next_index >= slots.length){
            next_index = 0;
        }
        current_slot = next_index;

        $$('#pb_barr').set('html', slots[current_slot]);
    }

    var cancel = setInterval(incrementSeconds, 500);



});
