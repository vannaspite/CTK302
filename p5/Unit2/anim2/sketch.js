var x = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  noStroke();
  background(220);
  //horizon
  fill(150);
  rect(0, 400, 600, 600);
  push();
  translate(x, 0); // also scale and rotate
  //  rect(0, height / 2, 50, 50);
  avatar()
  pop();
  if (x > width+500) {
    x = -500;
  }
  x = x + 3;

}
