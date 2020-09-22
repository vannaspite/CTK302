timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
  textSize(32);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {

  switch (state) {

    case 0:
      background('grey');
      text("How many times can you subtract 10 from 100?", height/2, width/2, 400, 400)
      timer++;
      if (timer > 5 * 60) {
        state = 1;
      }
      break;

    case 1:
      background('grey')
      text("Once. The next time you would be subtracting 10 from 90.", height/2, width/2, 400, 400);
      break;

  }
}
