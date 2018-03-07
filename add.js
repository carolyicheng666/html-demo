/* 数组求和 */
let arr = [1, 2, 3, 4, 5]

/* 通用版 */
function sum1(arr){
  let x = 0
  for(let i = 0; i < arr.length; i++){
    x += arr[i]
  }
  return x
}
console.log(sum1(arr)) // 15


/* 高级版 */
function sum2(arr) {
  return arr.reduce((a, b) => a + b)
}
console.log(sum2(arr)) //15


/* 争议版 */
function sum3(arr) {
  return eval(arr.join("+"))
}
console.log(sum3(arr)) //15
