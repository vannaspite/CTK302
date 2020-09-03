var f1, f2;

function setup() {
  createCanvas(800,800);

f1 = loadFont ("assets/fast99.ttf");
f2 = loadFont ("assets/leadcoat.ttf");

textAlign (CENTER);
}

function draw() {
  background(100);
  textFont(f1);
  textSize(60);

  text("font number one", width/2, height/2 - 100);
  textFont(f2);
  textSize(30);
  text("font number two", width/2, height/2 + 100);

}
