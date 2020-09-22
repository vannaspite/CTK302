function avatar(){

noStroke();

//horizon
fill(150)
rect(0, 400, 600, 600)

//shadow
fill(100)
ellipse(300,550, 300, 80)

//uncomment to float
//translate(0, -75)

//feet
fill('black');
rect(255,500,10,50);
rect(335,500,10,50);
rect(255, 550, 25,10);
rect(335, 550, 25,10);
//square
fill(205, 161, 95);
rect(150, 200, 300, 300);

//eyes
fill('white');
ellipse(255, 320, 60, 70)
ellipse(335, 320, 60, 70)

//pupils
fill('black');
if (mouseIsPressed){ellipse(240, 320, 40, 40)}
else{ellipse(255, 320, 20, 20)}
if (mouseIsPressed){ellipse(320,320, 40, 40)}
else{ellipse(335, 320, 20, 20)}

//mouth
if(mouseIsPressed){ellipse(300,395,150,100)}
else{rect(255, 390, 80, 10);}

//tongue
fill('pink');
if(mouseIsPressed){quad(145, 304, 313, 394,313, 413, 145, 340);
                ellipse(147,321,50,50)}
else{}
}
