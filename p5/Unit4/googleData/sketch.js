var bubbles = [];
var winter;
var spring;
var summer;
var fall;
var font;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  //let url = '1GtE3eoYVWBv9zMPoyettXzDCEv6qdNGKio_hgEh5duM'; // this is KEY of the URL from the sheet
  let url = '1TjjmeW5bQa0kOUfRBDi-BvDaSvmLVluRw0swjhFne1M'
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  imageMode(CENTER);

  winter = loadImage("assets/winter.png")
  spring = loadImage("assets/spring.png")
  summer = loadImage("assets/summer.png")
  fall = loadImage("assets/fall.png")

  font = loadFont ("assets/Bubblegum.ttf")

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Name, data[i].Season)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background(75, 132, 227);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myName, mySeason) {
    this.name = myName;
    this.season = mySeason;
    this.pos = createVector(random(width), random(height));
    this.vel = random(1, 3);

  }


  display() {
    if (this.season == "Fall") {
      image(fall, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.season == "Winter") {
      image(winter, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.season == "Spring") {
      image(spring, this.pos.x, this.pos.y, 50, 50);
    }
    if (this.season == "Summer") {
      image(summer, this.pos.x, this.pos.y, 50, 50);
      }

    textFont(font);
    text(this.name, this.pos.x, this.pos.y+30);

  }

  drive() {
    this.pos.x += this.vel;
    if (this.pos.x > width) this.pos.x = 0;
    // this.pos.y += this.vel;
    // if (this.pos.y > height) this.pos.y = 0;
  }

}
