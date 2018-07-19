/* 构造函数模式 */
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = function() {
    return this.name
  }
}

var person1 = new Person("Tom", 20, "Teacher")
var person2 = new Person("Bob", 18, "Doctor")

console.log(person1.sayName())  // Tom
console.log(person2.sayName())  // Bob