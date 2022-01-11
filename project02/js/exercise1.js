// Exercise 1: try changing the color of the ball to a random color every time it hits the wall.

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballRadius = 10;
var colorBall = "#0095DD";

function randomColor() {
    // tire un nombre al&eacute;atoire entre 0 et 255 pour chaque couleur et le converti en Hexad&eacute;cimal
    let red = Math.floor(Math.random()*256).toString(16);
    let green = Math.floor(Math.random()*256).toString(16);
    let blue = Math.floor(Math.random()*256).toString(16);
    // Assign la nouvelle couleur
    colorBall = "#"+red+green+blue;    
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = colorBall;
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        randomColor();
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
        randomColor();
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 10);