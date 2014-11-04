var WINDOW_WIDTH = 800;
var WINDOW_HEIGHT = 700;

var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});

function Vector(x,y) {
  this.x = x;
  this.y = y;
  this.print = function() {
    document.write(x+" "+y+"\n");
  }
}

function Sprite(src,width,height) {
	this.image = new Image();
	this.ready = false;
	this.image.onload = function () {
		this.ready = true;
	};
	this.image.src = src;
	this.width = width;
	this.height = height;
}

function Player(src, x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speedVector = new Vector(0,0);
  this.speed = 400;
  this.right = function() {return this.x+this.width;};
  this.left = function() {return this.x;};
  this.up = function() {return this.y;};
  this.down = function() {return this.y+this.height};
  this.sprite = new Sprite(src,width,height);
}
