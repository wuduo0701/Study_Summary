function Star(name,age) {
  this.name = name;
  this.age = age;
}
Star.prototype.dance = function(){
  console.log('我在跳舞',this.name);
};
let obj = new Star('张萌',18);
console.log(obj.__proto__ === Star.prototype);//true