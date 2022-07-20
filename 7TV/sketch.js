let h=1280;
let w=720;

function setup() {
  canvas = createCanvas(h, w);
  angleMode(DEGREES);
}

function draw() {
  background(15,15,130);
  translate(h/2,w/2);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();
  let secAngle=map(sc, 0, 60, 0, 360);
  let minAngle=map(mn, 0, 60, 0, 360) + map(secAngle, 0, 360, 0, 6);
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(minAngle, 0, 360, 0, 30);
  let i;
  let offset=210;
  
  strokeWeight(5);
  stroke(255);
  push();
  rotate(secAngle);
  line(0,0,180,0);
  pop();
  
  push();
  rotate(secAngle-180);
  line(0,0,25,0);
  pop();
  
  
  noFill();
    
  if(secAngle>=0 & secAngle<90) {
    arc(0,0,540,540, 0, secAngle);
    arc(0,0,540,540, 90, secAngle+180);
  }
  
  if(secAngle>=90 & secAngle<180) {
    arc(0,0,540,540, secAngle-90, 90);
    push();
    rotate(secAngle);
    arc(0,0,540,540, 0, 180);
    pop();
  }
  
  if(secAngle>=180 & secAngle<360){
    arc(0,0,540,540, secAngle, 360);
  }
  if(secAngle>270 & secAngle<360){
    arc(0,0,540,540, 90, secAngle+180);
  }

  for (i=1;i<15;i++){
  point(cos(-6*i)*offset,sin(-6*i)*offset);
}
  
  strokeWeight(12);  
  noFill();
  arc(0,0,506,506, 0, 270);

  strokeWeight(15);
  push();
  rotate(minAngle);
  line(0,0,190,0);
  pop();
  
  strokeWeight(20);
  push();
  rotate(hourAngle);
  line(0,0,145,0);
  pop();
  
  for (i=1;i<5;i++){
    point(cos(90*i)*offset,sin(90*i)*offset);
  }
  
}
