/* 原型模式 */
function Person() {

}

Person.prototype = {
  constructor: Person,
  name: "Tom",
  age: 20,
  job: "Dortor",
  friends: ["John", "Lina"],
  sayName: function() {
    return this.name
  }
}

var person1 = new Person()
var person2 = new Person()

person1.name = "Bob"
console.log(person1.sayName())  // Bob
console.log(person2.sayName())  // Tom

person1.friends.push("Van")
console.log(person1.friends)  // [ 'John', 'Lina', 'Van' ]
console.log(person2.friends)  // [ 'John', 'Lina', 'Van' ]
