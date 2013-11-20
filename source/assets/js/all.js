// INIT
var Pocket = new Firebase('https://pocket.firebaseio.com/');

Pocket.on('value', function(snapshot) {
  console.log(snapshot.val());
});

// SET

// SUBTRACT

// RESET

// ERROR