function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
}

function draw() {
  background(255);
  backgroundGradient(800);

  drawVirus(400, 400, 300);
  drawVirus(5, 380, 130);
  drawVirus(200, 50, 140);
  drawVirus(600, 20, 80);
  drawVirus(440, 160, 50);
  drawVirus(670, 170, 120);
  drawVirus(120, 680, 120);
  drawVirus(360, 780, 70);
  drawVirus(670, 520, 80);
  drawVirus(720, 750, 230);

  drawFace();

  drawText();

  strokeWeight(1);
  textSize(14);
  text(mouseX + ' : ' + mouseY, 750, 780);
}

function backgroundGradient(canvasSize) {
  noFill();

  const maxSize = canvasSize * 1.5;
  const halfCanvasSize = canvasSize / 2;
  for (let i = 0; i <= maxSize; i++) {
    let gradientColour = 255 - i / maxSize * 255 + 50;
    stroke(255, gradientColour, gradientColour);
    circle(halfCanvasSize, halfCanvasSize, i);
  }
}

function drawVirus(x, y, size) {
  fill(230, 0, 0);
  stroke(230, 0, 0);
  circle(x, y, size);

  const halfSize = size / 2;
  const spikeWidth = size / 50;
  const spikeHeight = spikeWidth * 5;
  const ellipseWidth = size / 6;

  push();
  translate(x, y);
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
}

function drawFace() {
  drawMouth();
  drawLeftEye();
  drawRightEye();
}

function drawMouth() {
  fill(255);
  stroke(0);
  strokeWeight(8);
  const mouthWidth = 130;
  arc(400, 450, mouthWidth, 110, 0, PI, CHORD);
  strokeWeight(1);

  const toothSpacing = 5
  const toothWidth = mouthWidth / 5 - 1;

  stroke(240, 0, 0);
  fill(240, 0, 0);
  for (let i = 0; i < 5; i++) {
    triangle(350 + i * toothWidth - toothSpacing, 454, 350 + i * toothWidth + toothSpacing, 454, 350 + i * toothWidth, 475);
  }
  triangle(358, 486, 367, 493, 362, 474);
  triangle(380, 497, 394, 500, 388, 474);
  triangle(407, 500, 420, 498, 413, 474);
  triangle(431, 493, 443, 485, 437, 474);
}

function drawLeftEye() {
  fill(255);
  stroke(0);
  strokeWeight(2);
  arc(339, 359, 70, 70, 0, PI + QUARTER_PI, PIE);

  fill(0);
  arc(339, 359, 25, 25, 0, PI + QUARTER_PI);

  stroke(255);
  fill(255);
  ellipse(335, 361, 6, 3);
}

function drawRightEye() {
  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(2);
  arc(459, 359, 70, 70, -QUARTER_PI, PI, PIE);

  fill(0);
  arc(459, 359, 25, 25, -QUARTER_PI, PI, PIE);

  stroke(255);
  fill(255);
  ellipse(463, 361, 6, 3);
}

function drawText() {
  fill(255);
  stroke(255);
  strokeWeight(1);
  textAlign(CENTER);

  textSize(36);
  text('CORONAVIRUS', 400, 650);

  textSize(22);
  text('2019-nCoV', 400, 680);
};