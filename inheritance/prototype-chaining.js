/* 原型链继承 */

function superType() {
  this.property = true
  this.colors = ["red", "yellow", "blue"]
}

superType.prototype.getSuperValue = function() {
  return this.property
}

function subType() {
  this.property = false
}

// 继承了 superType
subType.prototype = new superType()

subType.prototype.getSubValue = function() {
  return this.property
}

var instance = new subType()
console.log(instance.getSubValue())  // false
console.log(instance.colors)  // [ 'red', 'yellow', 'blue' ]

instance.colors.push("green")
console.log(instance.colors)  // [ 'red', 'yellow', 'blue', 'green' ]

var instance2 = new subType()
console.log(instance2.colors)  // [ 'red', 'yellow', 'blue', 'green' ]
