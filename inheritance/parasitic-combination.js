/* 寄生组合式继承 */

function parasitic(subType, superType) {
  var clone = Object(superType.prototype)
  clone.constructor = subType
  subType.prototype = clone
}

function superType(name) {
  this.name = name
  this.colors = ["red", "yellow", "blue"]
}

superType.prototype.sayName = function() {
  return this.name
}

function subType(name, age) {
  superType.call(this, name)
  this.age = age
}

parasitic(subType, superType)

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
