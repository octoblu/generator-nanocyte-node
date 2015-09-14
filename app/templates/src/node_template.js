var <%= className %>,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

<%= className %> = (function() {
function <%= className %>(config, data) {
    this.config = config != null ? config : {};
    this.data = data != null ? data : {};
    this.onMessage = bind(this.onMessage, this);
  }

<%= className %>.prototype.onMessage = function(message, callback) {

    var someProperty;
    if (callback == null) {
      callback = function() {};
    }

    // this.config stores properties/options of the node
    someProperty = this.config.someNodeProperty;

    // this.data is your node's persistant memory store, if there is already data on it
    // you can call it, otherwise, assign it values.

    this.data.someArray = [];
    this.data.push(50);

    // callback(null) will finish the process without sending a MESSAGE
    // callback(null, YOUR-MESSAGE-OBJECT-TO-SEND)
    return callback(null, message);
  };

return <%= className %>;

})();

module.exports = <%= className %>;
