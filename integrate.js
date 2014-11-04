Player.prototype.integrate = function(modifier) {
  this.speedVector = new Vector(0,0);
  if (40 in keysDown) { // down arrow
    this.speedVector.y += this.speed;
  } 
  if (38 in keysDown) { // up arrow
    this.speedVector.y -= this.speed;
  } 
  if (37 in keysDown) { // left arrow
    this.speedVector.x -= this.speed;
  } 
  if (39 in keysDown) { // right arrow
    this.speedVector.x += this.speed;
  }
  if ( this.x_speed != 0 && this.y_speed != 0 ) {
    this.speedVector.x *= Math.sqrt(1/2);
    this.speedVector.y *= Math.sqrt(1/2);
  }
  document.getElementById('INFO').innerHTML = "mod "+modifier+"\nspeed "+this.speed+" "+this.speedVector.x+" "+this.speedVector.y;
  this.move(this.speedVector.x*modifier,this.speedVector.y*modifier);
};

var integrate = function(modifier) {
  player.integrate(modifier);
};


Player.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  if(this.left() < 0) { // all the way to the left
    this.x = 0;
  } else if (this.right() > WINDOW_WIDTH) { // all the way to the right
    this.x = WINDOW_WIDTH - this.width;
  }
  if(this.up() < 0) { // all the way up
    this.y = 0;
  } else if (this.down() > WINDOW_HEIGHT) { // all the way down
    this.y = WINDOW_HEIGHT - this.height;
  }
};

var player = new Player("images/hero.png",100,100,32,32);
