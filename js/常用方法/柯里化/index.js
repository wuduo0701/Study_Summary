var person = [
  {
    name: 'lin'
  },
  {
    name: 'jia'
  }
]

function curry(fn){
  var slice = Array.prototype.slice;
  _args = slice.call(arguments,1);
  return function(){
      var _inargs = slice.call(arguments);
      return fn.apply(null,_args.concat(_inargs))
  }
  
}
var prop = curry(function (key, obj) {
  return obj[key]
});

var name = person.map(prop('name'))
console.log(name)