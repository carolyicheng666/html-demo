/* 寄生构造函数模式 */
function Person(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    return this.name
  }
  return o
}

var person1 = new Person("Tom", 20, "Teacher")
var person2 = new Person("Bob", 18, "Doctor")

console.log(person1.sayName())  // Tom
console.log(person2.sayName())  // Bob