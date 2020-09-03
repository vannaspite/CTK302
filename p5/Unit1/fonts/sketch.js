var f;

function setup() {
  createCanvas(800,800);

f = loadFont ("assets/stocky.ttf");

textAlign (CENTER);
}

function draw() {
  background(100);
  textFont(f);
  textSize(60);
//add another font
  text("favorite quote/lyric", width/2, height/2);

}
