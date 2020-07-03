function Parent() {
  this.name = 'parent';
  this.arr = [1, 2, 3];
}
function Child() {
  Parent.call(this);
  this.type = '';
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Parent;