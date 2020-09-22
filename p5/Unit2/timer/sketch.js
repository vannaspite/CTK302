timer = 0;
state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

  switch (state) {

    case 0:
      background('red');
      // pseudocode -
      //make the timer count up 1 each loop
      //if the timer is greater than 100 go to state 1
      timer++;
      if (timer > 5*60) {
        state = 1;
      }
      break;

    case 1:
      background('orange');
      break;

  }
}
