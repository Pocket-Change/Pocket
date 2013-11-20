// INIT
var Pocket = new Firebase('https://pocket.firebaseio.com/');
var display = document.getElementById('pocket-value');

var p = {};

Pocket.on('value', function(snapshot) {
  p = snapshot.val();
  display.innerHTML = p.current;
});

// SET

// SUBTRACT

// RESET

// ERROR