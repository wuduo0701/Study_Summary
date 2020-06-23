function test(person) {
  person.age = 20;
  let p2 = person;

  p2.age = 18;
  p2.name = 'Horace';
  console.log(p2);
  person = {
    name: "Horace",
    age: 18
  }
  console.log(person)
  console.log(p2 === person);
  return person;
} 
const p1 = {
  name: "Bin",
  age: "19"
}
const p2 = test(p1);
console.log(p1);
console.log(p2);