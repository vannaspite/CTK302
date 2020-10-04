let numberOfTouches ;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  numberOfTouches = touches.length; //this automatically comes in
  text(numberOfTouches + 'touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("no one is touching the screen", 5, 22) ;
      break ;

      case 1:
       text("it's kind of lonely here", 5, 22) ;
       ellipse(mouseX, mouseY, 50, 50);
      // put a picture here
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
      ellipse(mouseX, mouseY, 50, 50);
            // put a picture here
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
     ellipse(mouseX, mouseY, 50, 50);
            // put a picture here
      break ;
  }
}
