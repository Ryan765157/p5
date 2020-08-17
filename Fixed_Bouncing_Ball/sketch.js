 let ball
function setup() {
  createCanvas(400, 400);
  ball = new Ball()
  
}

function draw() {
  
  background(100, 100, 50);
  ball.show()
  ball.move()
  ball.bounce()
}
