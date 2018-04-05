require('./app.scss')

var front = { player: null, next: null, prev: null };
var right = { player: null, next: null, prev: null };
var back =  { player: null, next: null, prev: null };
var left =  { player: null, next: null, prev: null };

front.next = right;
front.prev = left;
right.next = back;
right.prev = front;
back.next  = left;
back.prev  = right;
left.next  = front;
left.prev  = back;

var current = front;
var page_num = 0;

onload=function(){
  var angle = 0;
  var cube = document.getElementById("cube");

  document.getElementById("next").onclick = function() {
    page_num += 1;
    angle -= 90;
    cube.style.webkitTransform = "rotateY("+ angle +"deg)";
    current = current.next;
  };

  document.getElementById("back").onclick = function() {
    page_num -= 1;
    angle += 90;
    cube.style.webkitTransform = "rotateY("+ angle +"deg)";
    current = current.prev;
  };

  document.getElementById("panel").onclick = function() {
  };
}