setTimeout(() => {
  console.log(1)
}, 0)

new Promise((resolve, reject) => {
  console.log(2)
  resolve()
  console.log(3)
}).then(() => {
  console.log(4)
})

process.nextTick(() => {
  console.log(5)
})

console.log(6)

// 2 3 6 5 4 1

// Promise 构造函数是同步执行的

/*
 process.nextTick 和 promise.then 都属于 microtask，而 setTimeout 属于 macrotask，在事件循环的 check 阶段执行。事件循环的每个阶段（macrotask）之间都会执行 microtask，事件循环的开始会先执行一次 microtask。
*/

/**
 process.nextTick 永远大于 promise.then，原因其实很简单。。。在Node中，_tickCallback在每一次执行完TaskQueue中的一个任务后被调用，而这个_tickCallback中实质上干了两件事：

 1.nextTickQueue中所有任务执行掉(长度最大1e4，Node版本v6.9.1)

 2.第一步执行完后执行_runMicrotasks函数，执行microtask中的部分(promise.then注册的回调)

 所以很明显 process.nextTick > promise.then
**/