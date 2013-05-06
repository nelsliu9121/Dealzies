(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  if (Modernizr.draganddrop) {
    $.fn.extend({
      draggable: function() {
        return this.each(function() {
          $("img", this).on("dragstart", function(evt) {
            return false;
          });
          $(this).on("dragstart", function(evt) {
            $(this).addClass("drag");
            evt.originalEvent.dataTransfer.effectAllowed = 'copyMove';
            return evt.originalEvent.dataTransfer.setData('text', $(this).attr('id'));
          });
          $(this).on("dragenter", function(evt) {
            evt.preventDefault();
            return $(this).addClass("dragover");
          });
          $(this).on("dragleave", function(evy) {
            return $(this).removeClass("dragover");
          });
          return $(this).on("dragend", function(evt) {
            evt.preventDefault();
            $(this).removeClass("dragover drag");
            return false;
          });
        });
      },
      undraggable: function() {
        return this.each(function() {
          return $(this).off("dragstart drag dragenter dragover dragleave dragend");
        });
      },
      droppable: function() {
        return this.each(function() {
          $(this).on("dragover", function(evt) {
            $(this).addClass("drop");
            evt.preventDefault();
            evt.originalEvent.dataTransfer.dropEffect = 'copy';
            return false;
          });
          return $(this).on("drop", function(evt) {
            var element_id;
            evt.stopPropagation();
            element_id = evt.originalEvent.dataTransfer.getData('text');
            $(this).removeClass("drop dragover").append($("\#" + element_id).detach().addClass("saved"));
            return false;
          });
        });
      },
      undroppable: function() {
        return this.each(function() {
          return $(this).off("dragover drop");
        });
      }
    });
  } else {
    error("this browser does not support drag and drop");
  }

}).call(this);
