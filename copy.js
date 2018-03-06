/* JavaScript 浅拷贝就是两者指向同一内存地址，操作上使用 = 连接即可 */
/* JavaScript 深拷贝需要开辟新的内存 */
/* 数组 */
var arr = [1,2,3,4,5]

/* for循环 */
var arr2 = copyArr(arr)
function copyArr(arr) {
  let res = []
  for (let i = 0; i < arr.length; i++) {
   res.push(arr[i])
  }
  return res
}

/* slice */
var arr3 = arr.slice(0)

/* concat */
var arr4 = arr.concat()

/* es6 */
var [ ...arr5 ] = arr

console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(arr4)
console.log(arr5)



/* 对象 */
var obj = {
  name: 'Yi',
  sex: 'man',
  old: '18'
}
/* for */
var obj2 = copyObj(obj)
function copyObj(obj) {
  let res = {}
  for (var key in obj) {
    res[key] = obj[key]
  }
  return res
}

/* json */
var obj3 = JSON.parse(JSON.stringify(obj))

/* es6 */
var { ...obj4 } = obj

console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)
