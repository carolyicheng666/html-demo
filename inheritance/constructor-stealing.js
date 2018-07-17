/* 借用构造函数 */

function superType(name) {
  this.name = name
  this.colors = ["red", "yellow", "blue"]
}

function subType() {
  // 继承了 superType
  superType.call(this, "Bob")
  this.age = 18
}

var instance = new subType()
console.log(instance.name)  // Bob
console.log(instance.age)  // 18
console.log(instance.colors)  // [ 'red', 'yellow', 'blue' ]

instance.colors.push("green")
console.log(instance.colors)  // [ 'red', 'yellow', 'blue', 'green' ]

var instance2 = new subType()
console.log(instance2.colors)  // [ 'red', 'yellow', 'blue' ]
