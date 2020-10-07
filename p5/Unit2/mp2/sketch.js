let startcolors = [];
let newcolors = [];
let amts = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
   for (var i = 0; i < 20; i++) {
   startcolors[i] = color('white');
     newcolors[i] = color(random(255), random(255), random(255));
     amts[i] = 0;
   }
  noStroke();

}

function draw() {
  fill(255,182,193);
  rect(135, 10, 40, 85);

  fill(219,112,147);
  quad(10, 85, 135, 85, 175, 95, 10, 95)

  fill(255,192,203);
  rect(10, 10, 125, 75);

  fill('black');
  textSize(30);
  text("Erase", 30, 55)

  textSize(13);
  text("(or shake to erase)", 20, 75)


for (var i = 0; i < 20; i++) {

   amts[i] += 0.01;
  if(amts[i] >= 1){
    amts[i] = 0.0;
    startcolors[i] = newcolors[i];
    newcolors[i] = color(random(255),random(255),random(255));
  }
}

  for (var i = 0; i < touches.length; i++) {
    fill(lerpColor(startcolors[i], newcolors[i], amts[i]));
    ellipse(touches[i].x, touches[i].y, random(20, 50));
  }
}

function deviceShaken(){
  clear();
}
function mouseClicked(){
if ((mouseX > 10) && (mouseX < 135) && (mouseY > 10) && (mouseY < 95)) {
  clear();
}
}
//code freeze 3:59pm 10/7/2020
