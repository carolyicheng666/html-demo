/* 稳妥构造函数模式 */
function Person(name, age, job) {
  var o = new Object()
  o.sayName = function() {
    return name
  }
  return o
}

var person1 = new Person("Tom", 20, "Teacher")
var person2 = new Person("Bob", 18, "Doctor")

console.log(person1.sayName())  // Tom
console.log(person2.sayName())  // Bob