/* 场景：如下所示，改写代码，让 for 循环中 setTimeout 函数每隔 1s 执行一次，并输出0 1 2 3 4 */
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

/* 改变 time */
for (var i = 0; i < 5; i++) {
  ((j) => {
    setTimeout(() => {
      console.log(j);
    }, i * 1000);
  })(i);
}

/* async/await */
const sleep = time => new Promise(resolve => setTimeout(resolve, time));
(async function () {
  for (let i = 0; i < 10; i++) {
    await sleep(1000);
    console.log(i);
  }
})()

/* yield */
const next = (gen, val) => {
  const n = gen.next(val);
  !n.done && Promise.resolve(n.value).then(d => next(gen, d));
}
const run = genfunc => next(genfunc());
const sleep = time => new Promise(resolve => setTimeout(resolve, time));
run(function* () {
  for (let i = 0; i < 10; i++) {
    yield sleep(1000);
    console.log(i);
  }
})

/* ES5 */
function run(arr, func) {
  var len = arr.length;
  function next() {
    if (!len) return;
    func(arr[arr.length - len], next);
    len--;
  }
  next();
}
var arr = Array.apply(null, { length: 10 }).map(Function.call, Number);
run(arr, function (i, next) {
  setTimeout(function () {
    console.log(i);
    next();
  }, 1000);
});