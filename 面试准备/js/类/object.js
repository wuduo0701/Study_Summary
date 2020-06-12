// var person = {
//   name: {
//     first: "Lin",
//     last: "JiaHao"
//   }
// }

// console.log(person.name.first)
// console.log(person['name']['first'])
// // 也可通过数组形式改变值
// person['name']['first'] = 'Pan';
// console.log(person['name']['first'])

// console.log(Object.prototype.toString.call(person) === Object.prototype.toString.call([]))
// var a = 'lin'
// console.log(Object.prototype.toString.call(a))

function Person(first, last, age, gender, interests) {
  // 这里的this指向new的实例
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};
Person.prototype.greeting = function() {
  alert('Hi! I\'m ' + this.name.first + '.');
};

function Student(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}