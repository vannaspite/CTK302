let cars = [];
let f1, f2, f3;
let fonts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/amalia/Amalia.ttf");
  f2 = loadFont("assets/demoness/Demoness.otf");
  f3 = loadFont("assets/forgotten dream/Forgotten Dream DEMO.otf");

  fonts = [f1, f2, f3];

  // Spawn 20 objects
  for (let i = 0; i < 20; i++) {
    cars.push(new Car());
  }
}

function draw() {
  background(100);

  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
  }

}



// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-6, 6), random(-6, 6));
    this.size = random(30, 80);
    this.c = random(255);
    this.font = floor(random(3));
  }

  // methods

  display() {
      //rect(this.pos.x, this.pos.y, 50, 25);
      textSize(this.size);
      fill(this.c);
  //
  //   switch(this.font){
  //     case 0:
  //     textFont(f1);
  //     break;
  //
  //     case 1:
  //     textFont(f2);
  //     break;
  //
  //     case 2:
  //     textFont(f3);
  //     break;
  //   }

  textFont(fonts[this.font]);
    text("vote", this.pos.x, this.pos.y);
  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
