/*
Simple Off-Canvas Navigation Pattern.
Framework agnostic, depends on Modernizr & Classie.
*/

// Close Drawer Object Literal
var body        = document.getElementById('wrap'),
    drawer      = document.getElementById('drawer'),
    // buttons     = Array.prototype.slice.call(document.querySelectorAll('.toggle')),
    // touchEvent  = 'click',
    content     = document.getElementById('main-content');

var Drawer = {
  closeDrawer: function(){
    classie.remove(drawer, 'active-left');
    classie.remove(drawer, 'active-right');
    classie.remove(drawer, 'active-top');
    classie.remove(drawer, 'active-bottom');
    classie.remove(body, 'drawer-open');
  },

  openDrawer: function(direction){
    classie.add(drawer, direction);
    classie.add(body, 'drawer-open');
  },

  bodyClick: function(e){
    Drawer.closeDrawer();
    content.removeEventListener(touchEvent, bodyClick );
  }
};
