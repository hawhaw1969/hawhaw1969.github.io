arr = [];
function zhanbu1(){
  var d = new Date();
  var x = d.getDate();
  var y = d.getMonth();
  var z = d.getYear();
  return (x*x*x + y*y*y%46 + z*459+5)%7 ;
}

function zhanbu2(){
  var d = new Date();
  var x = d.getDate();
  var y = d.getMonth();
  var z = d.getYear();
  return (x*9210*x*x+2 + y*y*y*y*y*y*y +z*z*x*y)%7;
}
var DICTIONARY=["上课", "运动","使用电子设备","看视频","看书","发呆","过晚睡"];
arr.push(DICTIONARY[zhanbu1()]);
var DIC=["占卜",'吃饭',"上计算机课","婚丧嫁娶",'玩游戏',"杀人（不会被发现）","考试"];
arr.push(DIC[zhanbu2()]);
function zhanbu() {
alert("今天不宜" + arr[0]);
alert("今天宜" + arr[1]);
}
