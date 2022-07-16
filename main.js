// Helper vars
const posibles_direction = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
const clubs = ['Wood', 'Putter', 'Iron', 'Hybrid', 'Wedge'];


// Helper functions
function get_wind_direction(){  // Determinates wind direction
    var wind_direction = posibles_direction[Math.floor(Math.random()*8)];
    return wind_direction;
}

function get_wind_speed(){  // Determinate wind speed;
    var wind_speed = Math.floor(Math.random()*30);
    
    return wind_speed;
}

function get_hole(){  // Set hole in default position
    $$('#hole').setStyle('top', '10px');
    $$('#hole').setStyle('left', '200px');
}

function get_ball(){  // Set ball in default position
    $$('#ball').setStyle('top', '450px');
    $$('#ball').setStyle('left', '100px');
}

function set_hole(top, left){ // Set hole in specific position
    if(top && left){
        $$('#hole').setStyle('top', top+'px');
        $$('#hole').setStyle('left', left+'px');       
    } else {
        return get_hole();
    }
}

function get_distance_green(){  // Get distance from ball to hole
    var hole_position = $$('#hole').getStyle('top')[0].split('px')[0];
    var ball_position = $$('#ball').getStyle('top')[0].split('px')[0];
    var hole_distance = Math.abs(ball_position-hole_position);
    var converted_distance = Math.round(hole_distance/10)+" METERS";

    return [
        hole_distance,
        converted_distance
    ]
}

function set_club(direction){

    var club_length = $$('#club_show').getChildren()[0].length;
    $$('#club_'+current_club+'').setStyle('display', 'none');

    if(direction === 'back'){
        var new_club = current_club-1;
        if(new_club < 0){
            new_club = club_length-1;
        }
    } else {
        var new_club = current_club+1;
        if(new_club >= club_length){
            new_club = 0;
        }
    }

    $$('#club_'+new_club+'').setStyle('display', 'block');
    current_club = new_club;

    return current_club;

}


// Events
$$('.club_buttons').addEvent('click', function(event){
    var direction = event.target.id.split("club_")[1];

    set_club(direction);

});


// Course

get_hole();
get_ball();
var wind_direction = get_wind_direction();
var wind_speed = get_wind_speed();
$$('#direction').set('html', wind_direction);
$$('#speed').set('html', wind_speed);
$$('#speed').set('html', wind_speed);
$$('#club_0').setStyle('display', 'block');
var converted_distance = get_distance_green()[1];
var current_club = 0;

if(converted_distance){
    $$('#distance').set('html', converted_distance);
}

// http://www.rollygolf.com/diccionario-del-golf-danielroll