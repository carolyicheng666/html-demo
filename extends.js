/* es5 */
function Person(name) {
  this.name = name;
}

Person.prototype.printName = function() {
  console.log(this.name);
};

function Bob(name, hobby) {
  Person.call(this, name);
  this.hobby = hobby;
}

Bob.prototype  = Object.create(Person.prototype);

Bob.prototype.printHobby = function() {
  console.log(this.hobby);
};

var bob = new Bob("Bob", "Histroy");
console.dir(bob);




/* es6 */
class Person {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

class Bob extends Person {
  constructor(name, hobby) {
    super(name);
    this.hobby = hobby;
  }

  printHobby() {
    console.log(this.hobby);
  }
}

var bob = new Bob("Bob", "Histroy");
console.dir(bob);
