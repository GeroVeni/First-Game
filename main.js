var then = Date.now();

function main () {
	var now = Date.now();
	var delta = now-then;
	document.getElementById('test').innerHTML = "Started";
	integrate(delta/1000);
	render();
	then = now;
}

setInterval(main,1);