// 数字
var pattern1 = /^[0-9]*$/;
console.log(pattern1.test('123')); // true
console.log(pattern1.test('abc')); // false
// 3位的数字
var pattern2 = /^\d{3}$/;
console.log(pattern2.test('123'));  // true
console.log(pattern2.test('1234')); // false
// 至少3位的数字
var pattern3 = /^\d{3,}$/;
console.log(pattern3.test('1234')); // true
console.log(pattern3.test('12'));   // false
// 3-5位的数字
var pattern4 = /^\d{3,5}$/;
console.log(pattern4.test('1234')); // true
console.log(pattern4.test('1'));    // false
// 由26个英文字母组成的字符串
var pattern5 = /^[A-Za-z]+$/;
console.log(pattern5.test('abc'));  // true
console.log(pattern5.test('1abc')); // false
// 由数字和26个英文字母组成的字符串
var pattern6 = /^[A-Za-z0-9]+$/;
console.log(pattern6.test('1abc'));  // true
console.log(pattern6.test('_abc'));  // false
// 日期格式：年-月-日
var pattern7 = /^(\d{4}|\d{2})-((1[0-2])|(0?[1-9]))-(([12][0-9])|(3[01])|(0?[1-9]))$/;
console.log(pattern7.test('2016-08-20'));  // true
console.log(pattern7.test('2016/08/20'));  // false
// 时间格式：小时:分钟, 24小时制
var pattern8 = /^((1|0?)[0-9]|2[0-3]):([0-5][0-9])$/;
console.log(pattern8.test('13:45'));  // true
console.log(pattern8.test('13点45')); // false
// 中国大陆身份证号，15位或18位
var pattern9 = /^\d{15}(\d\d[0-9xX])?$/;
console.log(pattern9.test('422322199901090033'));  // true
console.log(pattern9.test('asdfadfasfasdf1234'));  // false
// Email1
var pattern10 = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
console.log(pattern10.test('carolyicheng@163.com'));
console.log(pattern10.test('790496165@qq.com'));
// Email2
var pattern11 = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/;
console.log(pattern11.test('carolyicheng@163.com'));
console.log(pattern11.test('790496165@qq.com'));
//telephone
var pattern12 = /(13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7}/;
console.log(pattern12.test('13554463053'));
console.log(pattern12.test('13926242576'));



var text1 = "cat, bat, sat, fat";
var pattern1 = /.at/g;

// 全局模式，第一次匹配
var matches = pattern1.exec(text1);
console.log(matches.index);        // 0
console.log(matches[0]);           // cat
console.log(pattern1.lastIndex);   // 3

// 全局模式，第二次匹配
matches = pattern1.exec(text1);
console.log(matches.index);        // 5
console.log(matches[0]);           // bat
console.log(pattern1.lastIndex);   // 8

matches = pattern1.exec(text1);
console.log(matches.index);        // 10
console.log(matches[0]);           // sat
console.log(pattern1.lastIndex);   // 13

matches = pattern1.exec(text1);
console.log(matches.index);        // 15
console.log(matches[0]);           // sat
console.log(pattern1.lastIndex);   // 18

console.log("=============================");

var text2 = "000-00-0000";
var pattern2 = /\d{3}-\d{2}-\d{4}/;

if (pattern2.test(text2)){
    console.log("The pattern2 was matched.");
}

console.log("=============================");

var text3 = "this has been a short summer";
var pattern3 = /(.)hort/g;
/*
 * 注意：Internet Explorer 不支持 multiline 属性
 * Opera 不支持 input、lastMatch、lastParen 和 multiline 属性
 */
if (pattern3.test(text3)){
    console.log(RegExp.input);          // this has been a short summer
    console.log(RegExp.leftContext);    // this has been a
    console.log(RegExp.rightContext);   // summer
    console.log(RegExp.lastMatch);      // short
    console.log(RegExp.lastParen);      // s
    console.log(RegExp.multiline);      // false
}

console.log("=============================");

var text4 = "this has been a short summer";
var pattern4 = /(..)or(.)/g;

if (pattern4.test(text4)){
    console.log(RegExp.$1);  // sh
    console.log(RegExp.$2);  // t
}



var str = "qewqe,,ewq,e,wq,e,wqe,wq,ew,q";
console.log(str.replace(/[\,]/g, "")); 
