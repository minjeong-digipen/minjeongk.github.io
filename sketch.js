/*
Minjeong Kim
CS099
Spring 2020
Animate a Face Assignment
*/

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(200);
  x = width/2;
  y = height/2;
  let mrx = map(mouseX, 0, width, 230, 280);
  let mlx = map(mouseX, 0, width, 490, 540);
  let my = map(mouseY, 0, width, 270, 330);
  let ms = sin()

  strokeWeight(10);
  push();
  fill(0);
  arc(x, y-20, 700, 720, PI, 0, CHORD);
  rect(50, 370, 700, 300);
  fill(240, 225, 200);
  circle(x, y, width * 4 / 5);
  pop();
  ellipse(x-130, y-100, width/5, width/5.5);
  ellipse(x+130, y-100, width/5, width/5.5);
  push();
  fill(0);
  circle(mrx, my, width/12);
  circle(mlx, my, width/12);
  fill(190, 100, 100);
  ellipse(x, y+100, 100, height / 6 + sin(millis() / 300) * 80);
  pop();
  
}