function Playerimg(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0;
  this.y_speed = 0;
  this.speed = 400;
}

Player.prototype.integrate = function(modifier) {
  this.x_speed = 0;
  this.y_speed = 0;
  this.speed = this.Playerimg.speed;
  if (40 in keysDown) { // down arrow
    this.y_speed += this.speed;
  } 
  if (38 in keysDown) { // up arrow
    this.y_speed += -this.speed;
  } 
  if (37 in keysDown) { // left arrow
    this.x_speed += -this.speed;
  } 
  if (39 in keysDown) { // right arrow
    this.x_speed += this.speed;
  }
  if ( this.x_speed != 0 && this.y_speed != 0 ) {
    this.x_speed = this.x_speed * Math.sqrt(1/2);
    this.y_speed = this.y_speed * Math.sqrt(1/2);
  }
  document.getElementById('test').innerHTML = "mod "+modifier+" speed "+this.Playerimg.speed+" "+this.x_speed+" "+this.y_speed;
  this.Playerimg.move(this.x_speed*modifier,this.y_speed*modifier);
};

var integrate = function(modifier) {
  player.integrate(modifier);
};


Playerimg.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  if(this.x < 0) { // all the way to the left
    this.x = 0;
  } else if (this.x + this.width > width) { // all the way to the right
    this.x = width - this.width;
  }
  if(this.y < 0) { // all the way up
    this.y = 0;
  } else if (this.y + this.height > height) { // all the way down
    this.y = height - this.height;
  }
};

function Player() {
  this.Playerimg = new Playerimg(175, 580, 50, 10);
}

var player = new Player();
