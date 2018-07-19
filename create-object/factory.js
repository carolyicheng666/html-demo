/* 工厂模式 */
function createPerson(name, age, job) {
  var o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function() {
    return this.name
  }
  return o
}

var person1 = createPerson("Tom", 20, "Teacher")
var person2 = createPerson("Bob", 18, "Doctor")

console.log(person1.sayName())  // Tom
console.log(person2.sayName())  // Bob