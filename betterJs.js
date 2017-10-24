//~~ 、|0 <==> Math.floor() 
var a1 = 1.23;
console.log(~~a1, Math.floor(a1));
var a2 = 2.345;
console.log(a2 + 1 | 0, Math.ceil(a2));

//if else
var a, b;
if (a === 1) { a = 2; } else if (a === 3) { a = 4; } else { a = 5; }
((b === 1) && (true, b = 2)) || ((b === 3) && (true, b = 4)) || (b = 5);
console.log(a, b);

//dom
var template1 = "<div>" +
    "<h2>{title}</h2>" +
    "<div class='content' yAttr=''>{content}</div>" +
    "</div>"
var template2 = `<div><h2>{title}</h2><div class='content' yAttr=''>{content}</div></div> `
console.log(template1, '\n', template2);

//从数组中随机获取成员
var items = [12, 548, 'a', 2, 5478, 'foo', 8852, , 'Doe', 2145, 119];
var randomItem = items[Math.floor(Math.random() * items.length)];

//生成从0到指定值的数字数组
var numbersArray = [],
    max = 100;
for (var i = 1; numbersArray.push(i++) < max;);
console.log(numbersArray);

//字符串去空格
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };
var str = "asasdsadsadsadsa    ";
console.log(str.length, str.trim().length);