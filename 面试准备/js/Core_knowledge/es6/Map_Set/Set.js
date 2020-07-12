const s = new Set();
[1, 2, 2, 3, 4, 4].forEach(item => s.add(item));

let arr = [1,2,2,3,3,4,4,4];
console.log([...new Set(arr)]);

let str = 'abbbcccd';
console.log([...new Set(str)].join(''));

const set1 = new Set();
const set2 = new Set();
let a = NaN;
let b = NaN;
set1.add(a);
set1.add(b);
console.log(set1);

set2.add('3');
set2.add(3);
console.log(set2);


