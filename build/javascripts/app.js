(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.error = function(msg) {
    var error;
    error = "<div class=\"error\">" + msg + "</div>";
    return $("section#main").prepend(error);
  };

  root.store = new Storage();

  root.drawers = [];

  drawers.push(new Drawer());

  drawers.push(new Drawer(true));

  drawers.forEach(function(drawer, index) {
    return drawer.alignElement(index, drawers.length);
  });

  $(".draggable").draggable();

  $(".droppable").droppable();

}).call(this);
