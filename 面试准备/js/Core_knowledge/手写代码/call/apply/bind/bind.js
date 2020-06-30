Function.prototype.myBind = function(context) {
  var self = this;
  return function() {
    return self.apply(context);
  }
}