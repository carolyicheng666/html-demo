/* 组合使用构造函数和原型模式 */
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ["John", "Lina"]
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    return this.name
  }
}

var person1 = new Person("Tom", 20, "Teacher")
var person2 = new Person("Bob", 18, "Doctor")

console.log(person1.friends === person2.friends)  // false
console.log(person1.sayName === person2.sayName)  // true

person1.friends.push("Van")
console.log(person1.friends)  // [ 'John', 'Lina', 'Van' ]
console.log(person2.friends)  // [ 'John', 'Lina' ]
