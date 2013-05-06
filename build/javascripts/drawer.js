(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Drawer = (function() {
    var generateId, makeNewDrawer;

    function Drawer(makeNew) {
      if (makeNew == null) {
        makeNew = false;
      }
      this.id = "drawer_" + generateId(15);
      this.cards = [];
      this.element = null;
      this.drawElement();
      if (makeNew) {
        makeNewDrawer(this.element);
      }
    }

    Drawer.prototype.addCard = function(card) {
      return this.cards.push(card);
    };

    Drawer.prototype.removeCard = function(card) {
      return this.cards.splice((typeof card === "number" ? card : this.cards.indexOf(card)), 1);
    };

    Drawer.prototype.getCard = function(id) {
      if (typeof id === "number") {
        return this.cards[id];
      } else {
        return this.cards.filter(function() {
          if (this["id"] === id) {
            return this;
          }
        });
      }
    };

    Drawer.prototype.drawElement = function() {
      return this.element = $("<div id=" + this.id + " class=\"drawer droppable\"></div>").appendTo("div#drawers");
    };

    Drawer.prototype.updateElement = function() {
      return this.element;
    };

    Drawer.prototype.alignElement = function(index, total) {
      var devidedSpace, spacePushed, totalPushed, windowWidth;
      windowWidth = $(window).width();
      devidedSpace = 1140 / total;
      spacePushed = devidedSpace * index;
      totalPushed = (windowWidth - 1140) / 2 + spacePushed + (devidedSpace - 300) / 2;
      return this.element.css("left", totalPushed);
    };

    makeNewDrawer = function(element) {
      element.addClass("new_drawer");
      return element.one("click", function(evt) {
        drawers.push(new Drawer(true));
        drawers.forEach(function(drawer, index) {
          return drawer.alignElement(index, drawers.length);
        });
        return $(evt.target).removeClass("new_drawer");
      });
    };

    generateId = function(length) {
      var id, possibleChars;
      if (length == null) {
        length = 5;
      }
      id = "";
      possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      while (id.length < length) {
        id += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      }
      return id;
    };

    return Drawer;

  })();

}).call(this);
