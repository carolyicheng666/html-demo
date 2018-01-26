/* 柯里化定义：把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术*/
/* 作用：1. 参数复用；2. 提前返回；3. 延迟计算 */

/* 基本 */

var f1 = function(a) {
  return function(b) {
    return a+b;
  }
}

var f2 = function(a, b) {
  return a+b;
}

console.log(f1(1)(2));
console.log(f2(1,2));



/* 抽象化 */

var toCurring = function(fn){
  var _args = [];
  function cb(){
    if(arguments.length === 0) {
        return fn.apply(this, _args);
    }
    Array.prototype.push.apply(_args, [].slice.call(arguments));
    return cb;
  }
  return cb;
}



/* 具体使用 */

var sum = 0, avg = 0;
var f = toCurring(function() {
  var len = arguments.length;
  for (var i=0; i<len; i++) {
    sum+=arguments[i];
    avg+=arguments[i]/len;
  }
});

f(1)
f(2)
f(3) //抽象化的作用就体现出来了，参数个数可以随意，这三行等价于 f(1,2,3)
f() //当不传参数时返回结果，延迟计算

console.log(sum);
console.log(avg); //若还想计算平均值也非常方便，复用即可