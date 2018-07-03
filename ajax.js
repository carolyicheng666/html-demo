function ajax(url, option) {
  option = option || {};
  var method = (option.method || 'GET').toUpperCase(),
    async = option.async === undefined ? true : option.async,
    params = handleParams(option.data);
  // 创建
  var xhr = new XMLHttpRequest();
  if (async) {
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        callback(option, xhr);
      }
    };
  }
  if (method === 'GET') {
    // 初始化请求参数
    xhr.open("GET", url + '?' + params, async);
    // 发送请求
    xhr.send(null)
  } else if (method === 'POST') {
    // 初始化请求参数
    xhr.open('POST', url, async);
    // 设置请求头内容
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // 发送请求
    xhr.send(params);
  }
  if (!async) {
    callback(option, xhr);
  }
  function callback(opt, obj) {
    var status = obj.status;
    if (status >= 200 && status < 300) {
      opt.success && opt.success(obj.responseText, obj.responseXML);
    } else {
      opt.fail && opt.fail(status);
    }
  }
  function handleParams(data) {
    var arr = [];
    for (var i in data) {
      arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(data[i]));
    }
    return arr.join('&');
  }
}
//  测试调用
ajax('http://localhost:3000/post', {
  method: 'POST',
  data: {
    id: 2
  },
  success: function () {
    console.log('success')
  },
  fail: function () {
    console.log('fail')
  }
});