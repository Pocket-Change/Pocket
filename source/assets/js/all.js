// INIT
var Pocket = new Firebase('https://pocket.firebaseio.com/');
var count = document.getElementById('pocket-value');

var p = {};
var undid = false;

var current = Pocket.child('current'),
    last    = Pocket.child('last'),
    start   = Pocket.child('start');


Pocket.on('value', function(snapshot) {
  p = snapshot.val();
  count.innerHTML = p.current;
});

// SET
var set = function(val) {
  start.set(val);
  current.set(val);
  last.set('');
  undid = false;
};

// SUBTRACT
var subtract = function(val) {
  var latest = p.current - val;
  current.set(latest);
  last.set(val);
  undid = false;
};

// UNDO/REDO
var undo = function() {
  val = p.current+p.last;
  current.set(val);
  undid = true;
};

var redo = function() {
  if (undid === true) {
    val = p.current-p.last;
    current.set(val);
    undid = false;
  } else {
    console.log('Nothing to Undo.');
  }
};

// ERROR

