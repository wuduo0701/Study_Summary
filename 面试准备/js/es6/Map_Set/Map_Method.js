// Map转化为数组
const map = new Map();
map.set('a', 1).set('b', 2);

console.log([...map]);

// 数组转化为Map
const map1 = new Map([['a', 1], ['abc']]);
console.log(map1)

// Map转化为对象
const map2 = new Map();
map2.set('c', 1).set('b', 2);
function MaptoObj(map) {
  let Obj = Object.create(null);
  for(let [key, value] of map) {
    Obj[key] = value;
  }
  return Obj;
}
console.log(MaptoObj(map2))

// 对象转化为Map
var Obj1 = {
  'x': 2,
  'y': 3
}
function ObjtoMap(obj) {
  let map3 = new Map();
  for(let key of Object.keys(obj)) {
    map3.set(key, obj[key]);
  }
  return map3;
}
console.log(ObjtoMap(Obj1))

//Map转化为Json
function mapToJson(map) {
  return JSON.stringify([...map])
}

let map4 = new Map().set('name', 'An').set('des', 'JS');
console.log(mapToJson(map4))

//Json 转化为Map
function jsonToStrMap(jsonStr) {
  return ObjtoMap(JSON.parse(jsonStr));
}

console.log(jsonToStrMap('{"name": "An", "des": "JS"}'));