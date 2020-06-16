const m = new Map()
const o = {p: 'haha'}
m.set(o, 'content')
m.get(o)	// content

m.has(o)	// true
m.delete(o)	// true
m.has(o)	// false

const  map1 = new Map();
map1.set('a', 1);
map1.set('a', 2);

console.log(map1)