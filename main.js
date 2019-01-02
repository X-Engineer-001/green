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
  move:true,
  fist:true,
  communicate:false,
  
}
function Brush(x,y){
  this.x=x;
  this.y=y;
}
function Tree(x,y){
  this.x=x;
  this.y=y;
}
function Spirit(x,y){
  this.x=x;
  this.y=y;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=200;
}
function Animal(x,y){
  this.x=x;
  this.y=y;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=60;
}
function Human(x,y){
  this.x=x;
  this.y=y;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=100;
}
function Poorman(x,y){
  this.x=x;
  this.y=y;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=20;
}
function Ghost(x,y){
  this.x=x;
  this.y=y;
  this.xmove=Math.cos(Math.random()*2*Math.PI);
  this.ymove=Math.sin(Math.random()*2*Math.PI);
  this.speed=200;
}
function Corpse(x,y){
  this.x=x;
  this.y=y;
}
function Conflict(x,y){
  this.x=x;
  this.y=y;
}
function run(){
  
}
setInterval(run,1000/FPS);
