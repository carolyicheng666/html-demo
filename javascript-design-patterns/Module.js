var basketModule = (function() {
  //购物车数组,私有变量
  var basket = [];

  //私有函数
  function doSomethingPrivate() {
    //。。。
  }

  //私有函数
  function doSomethingElsePrivate() {
    //。。。
  }

  //返回一个暴露出的公有对象
  return {
    //添加item到购物车
    addItem: function(values) {
      basket.push(values);
    },

    //获得购物车里商品总数
    getItemCount: function() {
      return basket.length;
    },

    //私有函数的公有形式别名
    doSomething: doSomethingPrivate,

    //获取所有商品的总价格
    getTotal: function() {
      var itemCount = this.getItemCount(),
        total = 0;
      while (itemCount--) {
        total += basket[itemCount].price;
      }
      return total;
    }
  };
})();

//用法:
basketModule.addItem({
  item: "面包",
  price: 5
});
basketModule.addItem({
  item: "可乐",
  price: 2
});

//2
console.log(basketModule.getItemCount());
//7
console.log(basketModule.getTotal());