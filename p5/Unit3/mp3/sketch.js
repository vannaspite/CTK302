let cars = [];
let f1;
let frogPos;
let state = 0;
let maxCars = 20;
let timer = 0;
let cronch1;
let cronch2;
let victim;
let sound;
let winsound;
let losesound;


function preload(){
  sound = loadSound("assets/cronch.mp3");
  winsound = loadSound("assets/Win.mp3");
  losesound = loadSound("assets/Lose.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  f1 = loadFont("assets/FEASFBRG.TTF");
  cronch1 = loadImage("assets/cronch1.png");
  cronch2 = loadImage("assets/cronch2.png");
  victim = loadImage("assets/victim.png")
  frogPos = createVector(width / 2, height - 80);
  textAlign(CENTER);
  // Spawn 20 objects
  for (let i = 0; i < 15; i++) {
    cars.push(new Car());
  }
}

function draw() {

  switch (state) {
    case 0:
      background(100);
      textFont(f1);
      textSize(100);
      text("Help feed Cronch", width / 2, height / 2);
      textSize(30);
      text("click to play", width/2, height/2+70);
      break;

    case 1:
      game();
      timer++;
      if (timer > 30 * 60) {
        state = 3;
        losesound.play();
      }
      break;

    case 2:
      background(100);
      textFont(f1);
      textSize(100);
      text("nom nom nom", width / 2, height / 2);
      textSize(30);
      text("click to play again", width/2, height/2+70);
      break;

    case 3:
      background(100);
      textFont(f1);
      textSize(100);
      text("oop, better luck next time", width / 2, height / 2);
      textSize(30);
      text("click to try again", width/2, height/2+70);
      break;
  }
}

function game() {
  background(200);
  image(cronch1, frogPos.x, frogPos.y);
  // display and move 20 objects
  for (let i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].move();
    if (cars[i].pos.dist(frogPos) < 75) {
      image(cronch2, frogPos.x, frogPos.y);
    }
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
      sound.play();
    }
  }

  if (cars.length == 0) {
    state = 2; //they won
    winsound.play();
  }

  checkForKeys();
}

function resetTheGame() {
  cars = [];
  timer = 0;
  //respawn cars
  // Spawn 5 objects
  for (let i = 0; i < 15; i++) {
    cars.push(new Car());
  }
}

function mouseReleased() {
  switch (state) {
    case 0:
      state = 1; //if game state
      break;

    case 1:
      break;

    case 2:
      resetTheGame();
      state = 0;
      break;

    case 3:
      resetTheGame();
      state = 0;
      break;
  }
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x += 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y += 5;
  if (keyIsDown(UP_ARROW)) frogPos.y -= 5;
}

// Car class
class Car {

  // constructor and attributes
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(-3, 3), random(-3, 3));
  }


  display() {

    image(victim, this.pos.x, this.pos.y);

  }

  move() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;

  }

}
