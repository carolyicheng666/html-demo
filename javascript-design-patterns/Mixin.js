// 一些代码，可以被下面的类混入
var controls = {
  moveForward: function() {
    console.log(this.name + ' move forward');
  },
  moveLeft: function() {
    console.log(this.name + ' move left');
  },
  moveRight: function() {
    console.log(this.name + ' move right');
  }
}

// Car类
function Car() {
  this.name = 'car';
  this.moveBackward = function() {
    console.log(this.name + ' move backward');
  }
}

function mixin(receivingClass, givingClass) {
  // only provide certain methods
  if (arguments[2]) {
    for (var i = 2, len = arguments.length; i < len; i++) {
      receivingClass[arguments[i]] = givingClass[arguments[i]];
    }
  }
}

// 将新功能注入对象的原型中，缺点是导致原型污染和函数起源方面的不确定性
mixin(Car.prototype, controls, 'moveForward');

var car = new Car();
car.moveForward() // car move forward 
car.moveLeft() //  error:undefined is not a function
