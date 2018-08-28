var obj = {
  name: 'Yi',
  sex: 'man',
  old: '18',
  jobs: {
    first: 'FE'
  }
}

/* JavaScript 浅拷贝就是两者指向同一内存地址 */
/**
 * 直接复制
 */
let obj2 = obj
/**
 * 第一层深拷贝，其以下浅拷贝
 */
let obj3 = Object.assign({}, obj)


/* JavaScript 深拷贝需要开辟新的内存 */
/**
 * 会忽略 undefined
 * 不能序列化函数
 * 不能解决循环引用的对象
 */
let obj4 = JSON.parse(JSON.stringify(obj))
/**
 * jQuery
 */
let obj5 = $.extend(true, {}, obj)
/**
 * lodash
 */
let obj6 = _.cloneDeep(obj);



/* test result */
obj.name = 'Cheng'
obj.jobs.first = 'native'
console.log(obj2)
console.log(obj3)
console.log(obj4)
console.log(obj5)
console.log(obj6)
