let state = 0;

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  switch (state) {
    case 0:
    background('yellow');
    text("joke", height / 2, width / 2);
    break;

    case 1:
    background('orange')
    text("punchline", height / 2, width / 2);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
