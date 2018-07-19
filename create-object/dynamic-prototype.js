/* 动态原型模式 */
function Person(name, age, job) {
  // 属性
  this.name = name
  this.age = age
  this.job = job
  this.friends = ["John", "Lina"]
  // 方法
  if (typeof this.sayName != "function") {
    Person.prototype.sayName = function() {
      return this.name
    }
  }
}

var person1 = new Person("Tom", 20, "Teacher")
var person2 = new Person("Bob", 18, "Doctor")

console.log(person1.sayName())  // Tom
console.log(person2.sayName())  // Bob

person1.friends.push("Van")
console.log(person1.friends)  // [ 'John', 'Lina', 'Van' ]
console.log(person2.friends)  // [ 'John', 'Lina' ]