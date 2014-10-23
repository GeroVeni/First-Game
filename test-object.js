var animate = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) { window.setTimeout(callback, 1000/60) };

var canvas = document.createElement('canvas');
var width = 800;
var height = 700;
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');

window.onload = function() {
  document.body.appendChild(canvas);
  animate(step);
};

var step = function() {
  update();
  render();
  animate(step);
};

var update = function() {
    player.update();
};

function Playerimg(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
}

Player.prototype.update = function() {
  for(var key in keysDown) {
    var value = Number(key);
    if (40 in keysDown) { // down arrow
      this.Playerimg.move(0,4);
    } 
    if (38 in keysDown) { // up arrow
      this.Playerimg.move(0,-4);
    } 
    if(value == 37) { // left arrow
      this.Playerimg.move(-4, 0);
    } 
    if (value == 39) { // right arrow
      this.Playerimg.move(4, 0);
    } else {
      this.Playerimg.move(0, 0);
    }
  }
};

Playerimg.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  this.x_speed = x;
  this.y_speed = y;
  if(this.x < 0) { // all the way to the left
    this.x = 0;
    this.x_speed = 0;
  } else if (this.x + this.width > 800) { // all the way to the right
    this.x = 800 - this.width;
    this.x_speed = 0;
  }
  if(this.y < 0) {
    this.y = 0;
    this.y_speed = 0;
  } else if (this.y + this.height > 700) {
    this.y = 700 - this.height;
    this.y_speed = 0;
  }
}

var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, width, height);
};

Playerimg.prototype.render = function() {
  context.fillStyle = "#0000FF";
  context.fillRect(this.x, this.y, this.width, this.height);
};

function Player() {
   this.Playerimg = new Playerimg(175, 580, 50, 10);
}

Player.prototype.render = function() {
  this.Playerimg.render();
};

var player = new Player();
var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, width, height);
  player.render();
};

var keysDown = {};

window.addEventListener("keydown", function(event) {
  keysDown[event.keyCode] = true;
});

window.addEventListener("keyup", function(event) {
  delete keysDown[event.keyCode];
});
