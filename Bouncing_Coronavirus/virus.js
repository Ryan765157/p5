function Virus(x, y, size, showFace) {

  this.xpos = x;
  this.ypos = y;
  this.xspeed = random(1, 3)
  this.xdirection = random(-1, 1)
  this.yspeed = random(1, 3)
  this.ydirection = random(-1, 1)
  this.diameter = size
  this.radius = this.diameter / 2

  this.show = function() {
    fill(230, 0, 0);
    stroke(180, 0, 0);
    strokeWeight(1);
    circle(this.xpos, this.ypos, size);

    const halfSize = size / 2;
    const spikeWidth = size / 50;
    const spikeHeight = spikeWidth * 5;
    const ellipseWidth = size / 6;

    push();
    translate(this.xpos, this.ypos);
    for (i = 0; i < 16; i++) {
      push();
      rotate(TWO_PI * i / 16);
      let scale = 1;
      if (i % 2 == 1) {
        scale = 0.8;
      }
      rect(0, halfSize + spikeHeight / 2 * scale, spikeWidth, spikeHeight * scale);
      ellipse(0, halfSize + spikeHeight * scale, ellipseWidth * scale, ellipseWidth / 2 * scale);
      pop();
    }
    pop();

    if (showFace) {
      let facescale = size / 300;
      let lefteyex = -61 * facescale + this.xpos;
      let righteyex = 59 * facescale + this.xpos;
      let eyey = -41 * facescale + this.ypos;

      fill(255);
      stroke(0);
      strokeWeight(2);

      arc(lefteyex, eyey, 70 * facescale, 70 * facescale, 0, PI + QUARTER_PI, PIE);
      arc(righteyex, eyey, 70 * facescale, 70 * facescale, -QUARTER_PI, PI, PIE);

      fill(0);
      arc(lefteyex, eyey, 25 * facescale, 25 * facescale, 0, PI + QUARTER_PI);
      arc(righteyex, eyey, 25 * facescale, 25 * facescale, -QUARTER_PI, PI, PIE);

      stroke(255);
      fill(255);
      ellipse(lefteyex - 4 * facescale, eyey + 2 * facescale, 6 * facescale, 3 * facescale);
      ellipse(righteyex + 4 * facescale, eyey + 2 * facescale, 6 * facescale, 3 * facescale);

      stroke(0);
      strokeWeight(8 * facescale);
      arc(0 + this.xpos, 50 * facescale + this.ypos, 130 * facescale, 110 * facescale, 0, PI, CHORD);
    }
  }

  this.move = function() {
    this.xpos = this.xpos + this.xspeed * this.xdirection
    this.ypos = this.ypos + this.yspeed * this.ydirection
  }

  this.bounce = function() {
    if (this.xpos + this.radius > width) {
      this.xdirection = -1
    }
    if (this.xpos - this.radius < 0) {
      this.xdirection = 1
    }
    if (this.ypos + this.radius > height) {
      this.ydirection = -1
    }
    if (this.ypos - this.radius < 0) {
      this.ydirection = 1
    }
  }
}