var mic;
var vol;
var velocity = 0;
var x = 0;
var c = 'green';

function setup() {
  createCanvas(400, 400);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background('grey');

  fill(random(255), random(255), random(255))
  ellipse(x, 300, 75, 75);
  x = x + velocity;

  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1

  if (vol < .05) { // if the volume is LOUD?
    velocity = 0
  }
  if (vol > .05) { // if the volume is LOUD?
    velocity = 5
  }
  if (vol > .10) { // if the volume is LOUD?
    velocity = 10
  }
  if (vol > .15) { // if the volume is LOUD?
    velocity = 15
  }
  if (vol > .20) { // if the volume is LOUD?
    velocity = 20
  }

  if (x > width) {
    x = 0;
  }

  // extra stuff for debugging
  textSize(18);
  fill('black')
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
