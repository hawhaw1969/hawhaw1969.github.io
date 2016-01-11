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
     return "";
   }
   else if (a < 0.8){
     return "";
   }
   else if (a < 0.9){
     return "";
   }
   else if (a < 1){
     return "";
   }
   else {
     return;
   }
};
var main2 = function() {
   var b = Math.random();
   if (b < 0.1) {
     return "";
   }
   else if (b < 0.2){
     return "";
   }
   else if (b < 0.3){
     return "";
   }
   else if (b < 0.4){
     return "";
   }
   else if (b < 0.5){
     return "";
   }
   else if (b < 0.6){
     return "";
   }
   else if (b < 0.7){
     return "";
   }
   else if (b < 0.8){
     return "";
   }
   else if (b < 0.9){
     return "";
   }
   else if (b < 1){
     return "";
   }
   else {
     return "";
   }
};
var zhanbu = function(){
  alert ("今天不宜" + main());
  alert ("今天宜" + main2());
};
