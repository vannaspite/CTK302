var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('white')
  //ellipse(x, height / 2, 10, 10)
  text("wheeee", x, height / 2);
  x += 3;
  if (x > width + 20) {
    x = 0;
  }
}
