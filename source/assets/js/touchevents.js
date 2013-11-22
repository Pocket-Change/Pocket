var mainElement = document.getElementById('main-content');

var openReset = Hammer(mainElement).on("swipedown", function(event) {
  Drawer.openDrawer('active-top');
});

var timehammer = Hammer(mainElement).on("dragdown", function(event) {
  Drawer.openDrawer('active-top');
});

var openReset = Hammer(mainElement).on("swipeup", function(event) {
  Drawer.openDrawer('active-bottom');
});

var hammerTime = Hammer(mainElement).on("dragup", function(event) {
  Drawer.openDrawer('active-bottom');
});

var closeOut = Hammer(mainElement).on("tap", function(event) {
  Drawer.closeDrawer('active-bottom');
  Drawer.closeDrawer('active-top');
});
