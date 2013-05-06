(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  if (Modernizr.localstorage) {
    root.Storage = (function() {

      function Storage() {
        console.log("storage established");
      }

      Storage.prototype.set = function(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
      };

      Storage.prototype.remove = function(key) {
        return localStorage.removeItem(key);
      };

      Storage.prototype.get = function(key) {
        return JSON.parse(localStorage.getItem(key));
      };

      return Storage;

    })();
  } else {
    error("this browser does not support local storage");
  }

}).call(this);
