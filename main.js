var FPS=60;
var canvas=document.getElementById("gamecanvas");
var ctx=canvas.getContext("2d");
var cs={x:0,y:0};
$("#gamecanvas").mousemove(function(event){
  cs.x=event.offsetX;
  cs.y=event.offsetY;
});
player={
  x:350,
  y:350,
  xmove:0,
  ymove:0,
  speed:100,
  move:function(x,y){
    this.xmove=
  }
}
function Brush(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
}
function Tree(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
}
function Spirit(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
}
function Animal(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=60;
}
function Human(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=100;
}
function Poorman(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=20;
}
function Ghost(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
}
function Corpse(){
  this.x=Math.random()*700;
  this.y=Math.random()*700;
}
function run(){
  
}
setInterval(run,1000/FPS);
