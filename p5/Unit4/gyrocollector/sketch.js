// variables needed for gyroscope
var beta, gamma; // orientation data
var x = 0; // acceleration data
var y = 0;
var z = 0;
var xPosition = 0;
var yPosition = 0;

// var bunnyImage;
var cars = [];
var frogPos;

let sky;
let star;
let moon;
let f;


function setup() {

  createCanvas(windowWidth, windowHeight);

  // initialize accelerometer variables
  alpha = 0;
  beta = 0;
  gamma = 0;


  // spawn a bunch of cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  // initialize the frog's position
  frogPos = createVector(width / 2, height - 80);

  // load any images you need
  //bunnyImage = loadImage("assets/bunny.jpg");
  imageMode(CENTER);
  rectMode(CENTER);
  noStroke();

  sky = loadImage("assets/sky.jpg");
  star = loadImage("assets/star.png");
  moon = loadImage("assets/moon.png");

  f = loadFont("assets/font.otf");

}

function draw() {

  image(sky, width/2, height/2, width, height);


  // the map command !!!!
  // takes your variable and maps it from range 1 to range 2
  // map(yourVar, range1_x, range1_y, range2_x, range2_y) ;
  xPosition = map(gamma, -18, 18, 0, width);
  yPosition = map(beta, 25, 45, 0, height);


  // move the frog around the screen
  push(); // before you use translate, rotate, or scale commands, push and then pop after
  translate(xPosition, yPosition); // move everything over by x, y
  //  rotate(radians(alpha)); // using alpha in here so it doesn't feel bad

  // draw the FROG
  // image(bunnyImage, 0, 0, 500, 500);
  // fill('green');
  // ellipse(0, 0, 80, 80);
  image(moon, 0, 0, 75, 75);
  pop();


  // update the frog's position using the accelerometer data
  frogPos.x = xPosition;
  frogPos.y = yPosition;

  // iterate through the car loop to move them and see if we need to delete cars
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }

  // MORE DECORATIONS - write that pretty ATK type on top.
  fill('white');
  textSize(20);
  textAlign(CENTER);
  textFont(f);
  text("tilt your phone to collect the stars", width / 2, height/2 + 200, windowWidth - 200, windowHeight - 200);
  textSize(10);
  text("shake your phone to make new stars", width / 2, height/2 + 300, windowWidth - 200, windowHeight - 200);

  // Debugging information -- take this out when you're ready for production!
  // Just a bunch of text commands to display data coming in from addEventListeners
  // textAlign(LEFT);
  // textSize(20);
  // fill('white');
  // text("orientation data:", 25, 25);
  // textSize(15);
  // text("alpha: " + alpha, 25, 50);
  // text("beta: " + beta, 25, 70);
  // text("gamma: " + gamma, 25, 90);
  // textSize(20);
  // text("acceleration data:", 25, 125);
  // textSize(15);
  // text("x = " + x, 25, 150); // .toFixed means just show (x) decimal places
  // text("y = " + y, 25, 170);
  // text("z = " + z, 25, 190);


}

function deviceShaken() {
  // re-spawn cars
  cars = []; // clear the array first
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }
}


// HERE'S THE STUFF YOU NEED FOR READING IN DATA!!!

// Read in accelerometer data
window.addEventListener('deviceorientation', function(e) {
  alpha = e.alpha;
  beta = e.beta;
  gamma = e.gamma;
});


// accelerometer Data
window.addEventListener('devicemotion', function(e) {
  // get accelerometer values
  x = e.acceleration.x;
  y = e.acceleration.y;
  z = e.acceleration.z;
});





// car class!!
function Car() {
  // attributes
  this.pos = createVector(100, 100);
  this.vel = createVector(random(-5, 5), random(-5, 5));
  // this.r = random(255);
  // this.g = random(255);
  // this.b = random(255);
  // this.a = random(255);  // alpha opacity value for fill!


  // methods
  this.display = function() {

    // maybe use an image here instead!
    // fill(this.r, this.g, this.b, this.a);
    // ellipse(this.pos.x - 50, this.pos.y, 50, 50);
    // ellipse(this.pos.x + 50, this.pos.y, 50, 50);
    image(star, this.pos.x, this.pos.y, 25, 25);

  }

  this.drive = function() {
    this.pos.add(this.vel);

    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
