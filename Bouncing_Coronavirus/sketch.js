let virus1
let virus2
let virus3
let virus4
let virus5
let virus6
let virus7
let virus8
let virus9
let virus10

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  virus1 = new Virus(400, 400, 300, true);
  virus2 = new Virus(5, 380, 130)
  virus3 = new Virus(200, 50, 140);
  virus4 = new Virus(600, 20, 80);
  virus5 = new Virus(440, 160, 50);
  virus6 = new Virus(670, 170, 120);
  virus7 = new Virus(120, 680, 120);
  virus8 = new Virus(360, 780, 70);
  virus9 = new Virus(670, 520, 80);
  virus10 = new Virus(720, 750, 230);
}

function draw() {
  background(255, 200, 200);
  //backgroundGradient(800);

  virus2.show()
  virus2.move()
  virus2.bounce()

  virus3.show()
  virus3.move()
  virus3.bounce()

  virus4.show()
  virus4.move()
  virus4.bounce()


  virus5.show()
  virus5.move()
  virus5.bounce()

  virus6.show()
  virus6.move()
  virus6.bounce()

  virus7.show()
  virus7.move()
  virus7.bounce()

  virus8.show()
  virus8.move()
  virus8.bounce()

  virus9.show()
  virus9.move()
  virus9.bounce()

  virus10.show()
  virus10.move()
  virus10.bounce()

  virus1.show()
  virus1.move()
  virus1.bounce()

  drawText();
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


function drawText() {
  fill(255);
  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);

  textSize(36);
  text('CORONAVIRUS', 400, 650);

  textSize(22);
  text('2019-nCoV', 400, 680);
};