// INIT
var Pocket = new Firebase('https://pocket.firebaseio.com/');
var count = document.getElementById('pocket-value');

var p = {};

Pocket.on('value', function(snapshot) {
  p = snapshot.val();
  count.innerHTML = p.current;
});

// SET

// SUBTRACT

// RESET

// ERROR