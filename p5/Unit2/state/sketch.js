let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {

switch(state){

  case 0:
  background('pink');
  text('case 0', 250, 250);
  break;

  case 1:
  background('white');
  text('case 1', 250, 250);
  break;

  case 2:
  background('lightblue');
  text('case 2', 250, 250);
  break;

  }

}

function mouseReleased(){
  state++;
  if (state>2){
    state = 0;
  }
}
