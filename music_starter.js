// Drum Parameters
let drum_y = 200;
let drum_x = 500;
let drum_size;
let drum_s = 75;

// Wave Parameters
let wave_x = 0;
let wave_y = 700;
let x = [];
let y = [];
let angle = 0;
let num; let size = 20;
let period = 3; let shift = 200;

//Cloud Parameters
let cloudx = -200;
let cloudy = -500;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
  function draw_one_frame(words, words2, vocal, drum, bass, other, counter) {
  background(237, 197, 240);
   textFont('Verdana'); // please use CSS safe fonts
   rectMode(TOP);
   textSize(24);
   num = height/size;
   angleMode(DEGREES);

// Colors
 let blue = color(5, 162, 252);
 let light_blue = color(180, 220, 240);
 let pink = color(240, 98, 143);

// Display "Words"
  function Text(){
   fill(blue);
   noStroke();
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/2);
}

// Display "Second Set of Words"
  function Text2(){
   fill(240, 98, 143, 150);
   noStroke();
   textAlign(CENTER);
   textSize(280);
   text(words2, width/2, height/3.5 + 100);
}

// Display "Drums"
function Drum(){
drum_size = drum + drum_s;
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
  g = map(bass * 2, 180, 220, 190, 220);
  let amplitude = bass + 20;
  translate(wave_x, wave_y);
  for (let i=0; i<num; i++) {
    angle = i/(num-1) * 360 * period;
    y[i] = amplitude*cos(angle + shift);
    x[i] = i*size;
   //code below made the squares Spin
      //x[i] = amplitude * sin(angle + shift);
      //y[i] = amplitude * cos(angle + shift);
  fill(5, g, 252);
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

// MakeCloud Function
function makeCloud(cloudx, cloudy) {
  fill(250)
  noStroke();
  ellipse(cloudx, cloudy + other, 120, 100);
  ellipse(cloudx + 20, cloudy + 20 + other, 120, 100);
  ellipse(cloudx - 30, cloudy + 10 + other, 120, 100);
}

// Clouds Function
function clouds() {
  // Only move clouds if counter is above a threshold (e.g., 100)
  if (typeof counter !== "undefined" && counter > 8150) {
    cloudx += 2.0; // Move clouds to the right
  }
  fill(220);
  noStroke();
  makeCloud(cloudx, cloudy - 150);
  makeCloud(cloudx + 100, cloudy + 100);
  makeCloud(cloudx - 150, cloudy + 0);
}

// Calling Functions
Text2();
Mountain();
Drum();
Text();
Wave();
clouds();
}
