/* 组合继承 */

function superType(name) {
  this.name = name
  this.colors = ["red", "yellow", "blue"]
}

superType.prototype.sayName = function() {
  return this.name
}

function subType(name, age) {
  // 继承属性
  superType.call(this, name)
  this.age = age
}

// 继承方法
subType.prototype = new superType()
subType.prototype.constructor = subType

subType.prototype.sayAge = function() {
  return this.age
}

var instance = new subType("Bob", 18)
instance.colors.push("green")
console.log(instance.colors)  // [ 'red', 'yellow', 'blue', 'green' ]
console.log(instance.sayName())  // Bob
console.log(instance.sayAge())  // 18

var instance2 = new subType("Tom", 20)
console.log(instance2.colors)  // [ 'red', 'yellow', 'blue' ]
console.log(instance2.sayName())  // Tom
console.log(instance2.sayAge())  // 20
