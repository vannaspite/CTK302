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
    text("what's the queue to get a \n drink at a party called?", height / 2, width / 2);
    break;

    case 1:
    background('orange')
    text("a punchline", height / 2, width / 2);
    break;
  }
}

function mouseReleased() {
  state++;
  if (state > 1) {
    state = 0;
  }
}
