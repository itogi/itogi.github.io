var h=1280; //Ширина экрана
var w=720; //Высота экрана

let offset=235; //Отдаление от центра (для точек)
let i;

function setup() {
  canvas = createCanvas(h, w); //Создание экрана с заданной шириной и высотой
  angleMode(DEGREES);
}


function draw() {
  background(0,5,60);
  translate(h/2,w/2); //Центровка на основе ширины и высоты
  rotate(-90);
  
  let sc = second(); //Секунды
  let mn = minute(); //Минуты
  let hr = hour(); //Часы
  let secAngle=sc*6; //Угол секундной стрелки
  let minAngle=mn*6 + sc*0.1; //Угол минутной стрелки
  let hourAngle = hr%12*30 + mn*0.5; //Угол часовой стрелки
  let j;

  mask = createGraphics(500,500);
  
  noFill();
  
  mask.noStroke();
  mask.fill(255);
  

  drawClockFace();
  drawDots(offset);
  
  drawSeconds(secAngle);
  drawMinutes(minAngle);
  drawHours(hourAngle);
  //push();
    //noStroke();
    //fill(15,15,130);
    //arc(0,0,520,520, 270, 360);
  //pop();
}


function drawClockFace(i){
  stroke(140,255,195);
  strokeWeight(10);
  arc(0,0,570,570, 0, 360);
  arc(0,0,525,525, 0, 360);
  for (i=0;i<=5;i++){
    push();
      rotate(30*i);
      noStroke();
      fill(140,255,195);
      rect(220,-8,64,16);
      rect(-284,-8,64,16);
    pop();
  }
}

function drawDots(offset) {
  strokeWeight(16.5);
  j=second();
  for (i=0;i<60;i++){
    if (i%5!=0 & i>j){
        push();
        stroke(255,255,210);
          rotate(6*i);
          point(offset,0);
        pop();
     }
   else if (i%5!=0 & i<=j) {
      push();
        stroke(190,110,130);
        rotate(6*i);
        point(offset,0);
      pop();
   }
  }
}


function drawHours(hourAngle){
  push();
      rotate(hourAngle);
      noStroke();
      fill(0,5,60);
      rect(10,-12,130,8);
      rect(10,2,130,8);
      rect(130,-11,10,20);
      stroke(0,5,60);
      strokeWeight(10);
      noFill();
      arc(0,0,25,25, 0, 360);

      noStroke();
      fill(140,255,195);
      rect(10,-12,130,8);
      rect(10,2,130,8);
      rect(130,-11,10,20);
      stroke(140,255,195);
      strokeWeight(10);
      noFill();
      arc(0,0,25,25, 0, 360);
  pop();
  
}

function drawMinutes(minAngle){
  push();
      rotate(minAngle);
      noStroke();
      fill(0,5,60);
      rect(10,-13,200,9);
      rect(10,3,200,9);
      rect(195,-11,15,20);

      fill(140,255,195);
      rect(10,-13,200,9);
      rect(10,3,200,9);
      rect(195,-11,15,20);
  pop();
}

function drawSeconds(secAngle){
  push();
      rotate(secAngle);
      noStroke();
      fill(140,255,195);
      rect(15,-5,200,10);
  pop();
}
