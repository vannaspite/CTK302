function setup() {
createCanvas(800,800);
rectMode(CENTER);
}

function draw() {
  fill(random(255), random(255), random(255), random(255))
 ellipse(mouseX,mouseY,random(1000),random(1000));
}
