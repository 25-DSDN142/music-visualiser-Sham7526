let drum_y = 200
let drum_x = 500
let drum_size

let drum_s = 75
let bass_x = 0
let bass_y = 0
let bass_size

//Wave
let wave_x = 0;
let wave_y = 700;
let x = [];
let y = [];
let angle = 0;
let num; let size = 20;
let period = 3; let shift = 200;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(237, 197, 240)
   textFont('Verdana'); // please use CSS safe fonts
   rectMode(TOP);
   textSize(24);
   num = height/size;
   angleMode(DEGREES);

 // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/2);
 
 // color
   let blue = color(5, 162, 252);
   let light_blue = color(180, 220, 240);
   let purple = color(109, 29, 222);
   let red = color(235, 64, 52);
   let dark_red = color(201, 45, 34);
 
 // display "drums"
function Drum(){
drum_size = drum + drum_s
   stroke(light_blue);
   strokeWeight(2);
   fill(blue);
   ellipse(drum_x, drum_y, drum_size + 175);
   noStroke();
   fill(light_blue);
   ellipse(drum_x, drum_y, drum_s + 175);
   stroke(blue);
   fill(purple);
   ellipse(drum_x, drum_y, drum_size);
}

function Vocal_Toplip(){
 beginShape();
 stroke(dark_red);
 fill(red);
  curveVertex(0, 700);
  curveVertex(0, 750);
  let b = map(600, 800, 600, 800, 750)
  curveVertex(350, b - vocal);
  curveVertex(650, b - vocal);
  curveVertex(1000,750);
  curveVertex(1000,700);
  let t = map(600, 700, 600, 700, 650)
    curveVertex(650, t - vocal);
    curveVertex(350, t - vocal);
  endShape(CLOSE);
}

 // display "bass bottom lip" 
function Vocal_Bottomlip(){
  beginShape();
  stroke(dark_red);
  fill(red);
  //Bottom Lip
  //Left Side of Mouth
    curveVertex(0, 750); 
    curveVertex(0, 800); 
  //Bottom of Mouth
    let b = map(700, 900, 700, 900, 850) 
    curveVertex(350, b + vocal);
    curveVertex(750, b + vocal);
  //Right Side of Mouth
    curveVertex(1000, 800);
    curveVertex(1000, 750);
  //Top of Mouth
    let t = map(700, 800, 700, 800, 750)
    curveVertex(750, t + vocal);
    curveVertex(350, t + vocal);
    endShape(CLOSE); 
}

function Drum_Stick(){
  for (let i = 0; i < 9; i++) {
    let yPos = -70 + (i * drum); 
    let xPos = 60 + (i * 50);
    fill(dark_red);
    stroke(red);
    rect(xPos, yPos / 2, 30, 30);
      }
  for (let i = 0; i < 9; i++) {
    let yPos = -70 + (i * drum); 
    let xPos = 940 + (i * -50);
    fill(dark_red);
    stroke(red);
    rect(xPos, yPos / 2, 30, 30);
      }
}

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

Drum();
Wave();
//Drum_Stick();

//Vocal_Bottomlip();
//Vocal_Toplip();

}

