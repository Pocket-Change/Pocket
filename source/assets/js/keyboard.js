// KEYBOARD
Pocket.keyboard = function(which){
  // var zone = document.querySelectorAll('#' + which);
  // console.log(zone[0]);
  var keys   = $('#'+ which +' .key');
  var output = $('#'+ which +' .output')[0];
  var array = [];

  keys.click(function(e){
    var keypressed = e.currentTarget.getAttribute('data-value');
    array.push(keypressed);
    output.innerHTML = array.join("");
    e.preventDefault();
  });
};



Pocket.keyboard("resetter");
Pocket.keyboard("subtracter");

// make a keyboard that talks to an output zone.
  // make a string stuff the output
  //for each number on keyboard
    // Find it's value
    // on keypress,
      // add value to string
  // on delete key press
    // remove last character from string
  // on enter key press
    // remove keyboard
    // return string

// Edit Set
// on set click
  // call keyboard
  // on enter
