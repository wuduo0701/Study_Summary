let x = 'hi', y = 'lin';
var res = message`nihao,${x}, I am ${y}`
// literals 文字
// 注意在这个例子中 literals 的第一个元素和最后一个元素都是空字符串
// function message(literals, value1, value2) {
// 	console.log(literals[1]); // [ "", ", I am ", "" ]
// 	console.log(value1); // Hi
// 	console.log(value2); // Kevin
// }


// function message(literals, ...values) {
//   console.log(literals)
//   console.log(values)
// 	let result = literals.reduce((prev, next, i) => {
// 	    let value = values[i - 1];
// 	    return prev + value + next;
// 	});
// 	return result;
// }

// console.log(res)
function message(words, ...values) {
  console.log(words)
  console.log(values)
  let result = words.reduce((pre, curr, index) => {
    console.log(index);
    let value = values[index - 1];
    return pre + value + curr
  })
  return result
}
console.log()

