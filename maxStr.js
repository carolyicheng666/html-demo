var str = "Loremipsumdolorsitamet"
var o = {}
var len = str.length
for (var i = 0; i < len; i++) {
  var char = str.charAt(i)
  if (o[char]) {
    o[char]++
  } else {
    o[char] = 1
  }
}
console.log(o)

var max = 1, maxChar = []
for (var key in o) {
  if (max < o[key]) {
    max = o[key]
  }
}
for (var key in o) {
  if (o[key] == max) {
    maxChar.push(key)
  }
}

console.log(maxChar, max)