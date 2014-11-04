var canvas = document.createElement('canvas');
canvas.width = WINDOW_WIDTH;
canvas.height = WINDOW_HEIGHT;
var context = canvas.getContext('2d');
document.body.appendChild(canvas);

Player.prototype.render = function(ctx) {
  document.getElementById('INFO').innerHTML += "\nloc "+this.x+" "+this.y;
  this.sprite.render(ctx,this.x,this.y);
  context.fillStyle = "#00FF00";
  context.fillRect(0, this.y, this.width, this.height);
  context.fillRect(this.x, 0, this.width, this.height);
};

Sprite.prototype.render = function(ctx,x,y) {
  // document.getElementById('test').innerHTML = "DRAWING...";
  ctx.drawImage(this.image,x,y);
}

var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, WINDOW_WIDTH, WINDOW_HEIGHT);
  player.render(context);
};
