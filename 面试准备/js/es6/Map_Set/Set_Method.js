const set = new Set();
set.add(2).add(3).add(3);
console.log(set.has(2));  //true
console.log(set);   //{2, 3}
set.delete(2);
console.log(set.has(2));  //false

console.log(Array.from(set));

let arr = [1, 2, 2, 3, 3];
console.log(Array.from(new Set(arr)))

let set1 = new Set(['1', '2', '3'])
console.log(set1.keys());
console.log(set1.values());
console.log(set1.entries());

set1.forEach((key, value) => {
  console.log(key + ':' + value)
})

let set2 = new Set([1, 2, 3]);
let set3 = new Set([4, 5, 3]);

console.log([...set2, ...set3]);  //并集
console.log([...set2].filter(item => set3.has(item)));  //交集
console.log([...set2].filter(item => !set3.has(item)));  //差集(这里是a相对b的差集)