(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory()
    : typeof define === "function" && define.amd
      ? define(factory)
      : factory();
})(this, function() {
  "use strict";

  var Greeter = /** @class */ (function() {
    function Greeter(options) {
      this.greeting = options.greeting || "Hello";
    }
    Greeter.prototype.greet = function(whom) {
      return this.greet + ", " + whom + "!";
    };
    return Greeter;
  })();

  function hello() {
    var greeter = new Greeter({ greeting: "Good evening" });
    return greeter.greet("world");
  }
  hello();
});
