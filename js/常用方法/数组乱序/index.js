let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
  return arr;
}
console.log(shuffle(arr))