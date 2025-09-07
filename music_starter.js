// Drum Parameters
let drum_y = 200
let drum_x = 500
let drum_size
let drum_s = 75

// Wave Parameters
let wave_x = 0;
let wave_y = 700;
let x = [];
let y = [];
let angle = 0;
let num; let size = 20;
let period = 3; let shift = 200;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, words2, vocal, drum, bass, other, counter) {
  background(237, 197, 240)
   textFont('Verdana'); // please use CSS safe fonts
   rectMode(TOP);
   textSize(24);
   num = height/size;
   angleMode(DEGREES);

// Colors
 let blue = color(5, 162, 252);
 let light_blue = color(180, 220, 240);
 let purple = color(109, 29, 222);
 let red = color(235, 64, 52);
 let dark_red = color(201, 45, 34);
 let pink = color(240, 98, 143);

// Display "Background Words"
  function BackgroundText(){
    fill(light_blue);
    textAlign(CENTER);
    textSize(36);
    text(words2, width/2, height/2 + 100);
  }
// Display "Words"
  function Text(){
   fill(blue);
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/2);
}
// Display "Drums"
function Drum(){
drum_size = drum + drum_s
   stroke(light_blue);
   strokeWeight(2);
   fill(blue);
   ellipse(drum_x, drum_y, drum_size + 175);
   noStroke();
   fill(light_blue);
   ellipse(drum_x, drum_y, drum_s + 175);
   noStroke();
   fill(pink);
   ellipse(drum_x, drum_y, drum_size);
}
// Display "Bass"
function Wave(){
  let amplitude = bass + 20;
  translate(wave_x, wave_y);
  for (let i=0; i<num; i++) {
    angle = i/(num-1) * 360 * period;
    y[i] = amplitude*cos(angle + shift);
    x[i] = i*size;
   //code below made the squares Spin
      //x[i] = amplitude * sin(angle + shift);
      //y[i] = amplitude * cos(angle + shift);
  fill(blue);
  stroke(light_blue);
  strokeWeight(3);
  rect(x[i], y[i], size, size);


  }
  shift += 1;
}
// Mountain Range
function Mountain(){
  fill(237, 154, 180);
  noStroke();
  beginShape();
  vertex(0, 500);
  vertex(100, 450);
  vertex(400, 500);
  vertex(600, 450);
  vertex(1000, 450);
  vertex(1000, 1000);
  vertex(0, 1000);
  endShape(CLOSE);

  fill(237, 128, 162);
  noStroke();
  beginShape();
  vertex(150, 670);
  vertex(200, 800);
  vertex(500, 700);
  endShape(CLOSE);

  fill(242, 119, 157);
  noStroke();
  beginShape();
  vertex(200, 800);
  vertex(600, 800);
  vertex(1000, 500);
  endShape(CLOSE);
  
  fill(pink);
  noStroke();
  beginShape();
  vertex(0, 700);
  vertex(100, 650);
  vertex(300, 700);
  vertex(600, 800);
  vertex(800, 500);
  vertex(1000, 400);
  vertex(1000, 1000);
  vertex(0, 1000);
  endShape(CLOSE);

  fill(237, 81, 130);
  noStroke();
  beginShape();
  vertex(0, 900);
  vertex(300, 800);
  vertex(700, 850);
  vertex(1000, 700);
  vertex(1000, 1000);
  vertex(0, 1000);
  endShape(CLOSE);

  
}

Mountain();
Drum();
Text();
BackgroundText();
Wave();
}

