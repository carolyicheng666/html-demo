/* 1. 构造函数法 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.species = 'human';
Person.prototype.walk = function(){};
Person.prototype.speak = function(){};

var xxx = new Person('xiao', 18);
console.log(xxx); // Person { name: 'xiao', age: 18 }
// 通过构造函数的prototype属性，可以将实例对象的公共属性集成到一个原型对象上面，节约内存
console.log(xxx.__proto__); // Person { species: 'human', walk: [Function], speak: [Function] }



/* 2. Object.create() */
var Person = {
  species: 'human',
  walk: function(){},
  speak: function(){}
}

// 以 Person 这个对象作为原型，生成一个新的空对象 xxx，xxx 的原型指向 Person
var xxx = Object.create(Person);
console.log(xxx); // {}
console.log(xxx.__proto__); // { species: 'human', walk: [Function: walk], speak: [Function: speak] }



/* 3. 极简主义法 */
var Person = {
  createNew: function(){
    var person = {};
    person.species = "human";
    person.walk = function(){};
    person.speak = function(){};
    return person;
  }
}

// 极简主义法的原理：使用一个对象作为原本，去复制完成另一个对象
// 极简主义法不会修改实例对象的原型，而Object.create()涉及到原型
var xxx = Person.createNew();
console.log(xxx); // { species: 'human', walk: [Function], speak: [Function] }



/* es6 class */
class Person1 {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  walk(){}
  speak(){}
}

var xxx = new Person1('xiao',18);
console.log(typeof Person1); // "function",Person1 本质上还是一个函数
console.log(xxx);
