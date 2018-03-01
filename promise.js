/* 链式操作 */
var runAsync1 = function() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 1000);
  });
  return p;
}
var runAsync2 = function() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 2000);
  });
  return p;
}
var runAsync3 = function() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      console.log('异步任务3执行完成');
      resolve('随便什么数据3');
    }, 2000);
  });
  return p;
}

runAsync1().then(function(data) {
  console.log(data);
  return runAsync2();
}).then(function(data) {
  console.log(data);
  return runAsync3();
}).then(function(data) {
  console.log(data);
});


/* reject、catch */
var promise = function() {
  var p = new Promise(function(resolve, reject) {
    //做一些异步操作
    setTimeout(function() {
      var num = Math.ceil(Math.random() * 10); //生成1-10的随机数
      if (num <= 5) {
        resolve(num);
      } else {
        reject('数字太大了');
      }
    }, 2000);
  });
  return p;
}

promise().then(function(data) {
  console.log('resolved');
  console.log(data);
}).catch(function(err) {
  console.log('rejected');
  console.log(err);
});