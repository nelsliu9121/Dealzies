(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.Card = (function() {
    var generateId;

    function Card(data) {
      this.id = "card_" + generateId(15);
      this.data = data;
      this.element = null;
      this.drawElement();
    }

    Card.prototype.drawElement = function() {
      var desc_tag, image_tag, price_tag, title_tag;
      this.element = $("<div id=\"" + this.id + "\" class=\"card draggable\" draggable=\"true\">");
      image_tag = "<img src=\"" + this.data.image + "\" />";
      title_tag = "<h3><a href=\"" + this.data.link + "\">" + this.data.title + "</a></h3>";
      price_tag = "<span>" + this.data.price + "</span>";
      desc_tag = "<p>" + this.data.desc + "</p>";
      this.element.append([image_tag, title_tag, price_tag, desc_tag]);
      return this.element.appendTo("div#cards").draggable();
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

    return Card;

  })();

}).call(this);
