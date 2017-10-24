var test = (function(a) {
    this.a = a;
    return function(b) {
        return this.a + b;
    }
} (function(a, b) {
    return a;
}(1, 2))); 
console.log(test(4));

var a = Array(100).join(",").split(",").map(function(item, index) {　　
    return index;
});
console.log(a);