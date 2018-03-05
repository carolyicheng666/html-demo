/* 数组去重 */
var a = [1, 1, '1', '2', 1]

/* 1.通用方法 */
function unique1(arr) {
  var res = []
  for (var i = 0, len = arr.length; i < len; i++) {
    var item = arr[i]
    for (var j = 0, jlen = res.length; j < jlen; j++) {
      if (item === res[j]) //arr数组的item在res已经存在,就跳出循环
        break
    }
    if (j === jlen) //循环完毕,arr数组的item在res找不到,就push到res数组中
      res.push(item)
  }
  return res
}
console.log(unique1(a)) // [1, 2, "1"]



/* 2.高级方法 */
function unique2(arr) {
  return arr.filter(function(ele, index, array) {
    return array.indexOf(ele) === index //很巧妙,这样筛选一对一的,过滤掉重复的
  })
}
console.log(unique2(a)) // [1, 2, "1"]



/* 3.hasOwnProperty */
function unique3(arr) {
  var obj = {}
  return arr.filter(function(item, index, array) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)
  })
}
console.log(unique3(a)) // [1, 2, "1"]



/* 4.ES6 */
const unique4 = a => [...new Set(a)]
console.log(unique4(a))