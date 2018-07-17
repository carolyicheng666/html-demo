/* 寄生式继承 */

function parasitic(original) {
  var clone = Object(original)
  clone.sayHi = function() {
    return `Hi!`
  }
  return clone
}

var person = {
  name: "Bob",
  colors: ["red", "yellow", "blue"]
}

var otherPerson = parasitic(person)
console.log(otherPerson.sayHi())
