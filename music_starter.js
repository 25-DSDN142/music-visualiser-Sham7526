let drum_y = 750
let drum_x = 500
let drum_size
let drum_s = 75

let bass_y = 0
let bass_size

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(109, 29, 222)
   textFont('Verdana'); // please use CSS safe fonts
   rectMode(TOP);
   textSize(24);

 // display "words"
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/2, height/2);
 
 // color
   let blue = color(5, 162, 252);
   let light_blue = color(180, 220, 240);
   let purple = color(109, 29, 222);
 
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
 // display "bass" 
function Bass(){
bass_size = bass + 200
x = 100;
   let bass_x = map(x, 100, 200, 0, 200);
   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y, bass_x, 30, bass_size);
   
   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 32, bass_x, 30, bass_size - 50);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 64, bass_x, 30, bass_size - 70);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 96, bass_x, 30, bass_size + 20);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 128, bass_x, 30, bass_size);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 160, bass_x, 30, bass_size - 20);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 192, bass_x, 30, bass_size + 10);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 224, bass_x, 30, bass_size + 5);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 256, bass_x, 30, bass_size);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 288, bass_x, 30, bass_size - 20);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 320, bass_x, 30, bass_size - 5);

   stroke(blue);
   fill(light_blue);
   strokeWeight(2);
   rect(bass_y + 256, bass_x, 30, bass_size);

}

Drum()
Bass()

}

