var obj1 = {
    fn: function(n) {
        return n > 2 ? arguments.callee(n - 1) + arguments.callee(n - 2) : n;
        //return n>2?this.fn(n-1)+this.fn(n-2):n;
    }
}
var f1 = obj1.fn(10);
console.log(f1);