/* 原型式继承 */

var person = {
  name: "Bob",
  colors: ["red", "yellow", "blue"]
}

var one = Object.create(person)
one.name = "Tom"
one.colors.push("green")
console.log(one.name)  // Tom
console.log(one.colors)  // [ 'red', 'yellow', 'blue', 'green' ]

var two = Object.create(person)
two.name = "John"
two.colors.push("orange")
console.log(two.name)  // John
console.log(two.colors)  // [ 'red', 'yellow', 'blue', 'green', 'orange' ]

console.log(person.name)  // Bob
console.log(person.colors)  // [ 'red', 'yellow', 'blue', 'green', 'orange' ]
