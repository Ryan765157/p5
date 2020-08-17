var ball1;
var ball2;

function setup() {
  createCanvas(window.windowWidth, window.windowHeight);

  ball1 = new Ball(width / 2, height / 2, 'green');
  ball2 = new Ball(width / 2, height / 2, 'blue');
}

function draw() {
  background(255);

  ball1.update();
  ball1.show();
  
  ball2.update();
  ball2.show();
}

function Ball(x, y, colour) {
  this.pos = createVector(x, y);
  this.dir = createVector(random(-1, 1), random(-1, 1));
  this.vel = random(20, 50);
  this.r = 40;

  this.update = function() {
    let uPos = p5.Vector.mult(this.dir, this.vel);

    this.pos.add(uPos);

    if (this.pos.x < this.r || this.pos.x > width - this.r) {
      this.dir.x *= -1;
    }
    if (this.pos.y < this.r || this.pos.y > height - this.r) {
      this.dir.y *= -1;
    }
  }

  this.show = function() {
    stroke(0);
    fill(colour);
    strokeWeight(2);
    circle(this.pos.x, this.pos.y, this.r);
  }
}