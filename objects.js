var Direction = {
	down : 0,
	right : 1,
	up : 2,
	left : 3
}

/*************************
*         2
*         ^
*         |
*   3 < - @ - > 1
*         |
*         v
*         0
*************************/

// 2-dimensional vector ( greek : " DIANYSMA" )
var Vector = {
	x : 0,
	y : 0
}

var Player = {
	width : 42 // Pending value
	height : 42 // Pending value
	x : 0, // x coordinate
	y : 0, // y coordinate
	speed : 3, // May change
	ux : 0, // horizontal spped
	uy : 0, // vertical speed
	direction : Direction.down, // Facing the user
	isInAir : false // Shows whether player has jumped
}

Player.integrate = function (dt) {
	/* Here goes input handling*/

	// Updating player coordinates
	Player.x += ux;
	Player.y += uy;

	// Directing the player towards direction of move
	if ( ux > 0 ) direction = Direction.right;
	if ( ux < 0 ) direction = Direction.left;
	if ( uy > 0 ) direction = Direction.down;
	if ( uy < 0 ) direction = Direction.up;

	// Clamping player inside screen
	if ( x > 1 ) {
		ux = 0;
		x = 1;
	}
	else if ( x < 0 ) {
		ux = 0;
		x = 0;
	}
	if ( y > 1 ) {
		uy = 0;
		y = 1;
	}
	else if ( y < 0 ) {
		uy = 0;
		y = 0;
	}
}

PLayer.render = function (ctx) {
	// Player drawing function
}
