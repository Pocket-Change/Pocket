// INIT

var Pocket = Pocket || {};

var ref = new Firebase('https://pocket.firebaseio.com/');
var count = document.getElementById('pocket-value');

var p = {};
var undid = false;

var current  = ref.child('current'),
    last     = ref.child('last'),
    start    = ref.child('start'),
    oldStart = $('#resetter .output')[0];

ref.on('value', function(snapshot) {
  p = snapshot.val();
  count.innerHTML = p.current;
  oldStart.innerHTML = p.start;
});

// SET
Pocket.set = function(val) {
  start.set(val);
  current.set(val);
  last.set('');
  undid = false;
};

// SUBTRACT
Pocket.subtract = function(val) {
  var latest = p.current - val;
  current.set(latest);
  last.set(val);
  undid = false;
};

// UNDO/REDO
Pocket.undo = function() {
  val = p.current+p.last;
  if (undid === false) {
    current.set(val);
  }
  undid = true;
};

Pocket.redo = function() {
  if (undid === true) {
    val = p.current-p.last;
    current.set(val);
    undid = false;
  } else {
    console.log('Nothing to Undo.');
  }
};

