var main = function() {
   var a = Math.random();
   if (a < 0.1) {
     return "写作业";
   }
   else if (a < 0.2){
     return "上课";
   }
   else if (a < 0.3){
     return "运动";
   }
   else if (a < 0.4){
     return "使用电子设备";
   }
   else if (a < 0.5){
     return "过晚睡";
   }
   else if (a < 0.6){
     return "过早睡";
   }
   else if (a < 0.7){
     return "拍照";
   }
   else if (a < 0.8){
     return "看视频";
   }
   else if (a < 0.9){
     return "看书";
   }
   else if (a < 1){
     return "发呆";
   }
   else {
     return "去买赌博（赢面极小）";
   }
};
var main2 = function() {
   var b = Math.random();
   if (b < 0.1) {
     return "占卜";
   }
   else if (b < 0.2){
     return "吃饭";
   }
   else if (b < 0.3){
     return "上计算机课";
   }
   else if (b < 0.4){
     return "再占卜一次";
   }
   else if (b < 0.5){
     return "玩游戏";
   }
   else if (b < 0.6){
     return "考试";
   }
   else if (b < 0.7){
     return "婚丧嫁娶";
   }
   else if (b < 0.8){
     return "动土动木";
   }
   else if (b < 0.9){
     return "杀人（不会被发现）";
   }
   else if (b < 1){
     return "睡觉";
   }
   else {
     return "去买彩票（中奖几率极大）";
   }
};
var zhanbu = function(){
  alert ("今天不宜" + main());
  alert ("今天不宜" + main());
  alert ("今天不宜" + main());
  alert ("今天宜" + main2());
  alert ("今天宜" + main2());
  alert ("今天宜" + main2());
};
