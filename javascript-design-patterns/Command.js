var lian = {}; //连

//炮兵
lian.paobing = function(paobing_num) {
  console.log(paobing_num + '炮' + '开始战斗');
}
//步兵
lian.bubing = function(bubing_num) {
  console.log(bubing_num + '人' + '开始战斗');
}
//连长
lian.lianzhang = function(command) {
  lian[command.type](command.num);
}

//首长开始发命令，把命令发给连长
lian.lianzhang({
  type: 'paobing',
  num: 100
});
lian.lianzhang({
  type: 'bubing',
  num: 500
});
