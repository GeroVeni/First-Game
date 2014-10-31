var canvas = document.createElement('canvas');
canvas.width = width;
canvas.height = height;
var context = canvas.getContext('2d');
document.body.appendChild(canvas);

Playerimg.prototype.render = function() {
  context.fillStyle = "#0000FF";
  document.getElementById('test').innerHTML += "loc "+this.x+" "+this.y;
  context.fillRect(this.x, this.y, this.width, this.height);
  // context.fillStyle = "#00FF00";
  // context.fillRect(0, this.y, this.width, this.height);
  // context.fillRect(this.x, 0, this.width, this.height);
};

Player.prototype.render = function() {
  this.Playerimg.render();
};

var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, width, height);
  player.render();
};
