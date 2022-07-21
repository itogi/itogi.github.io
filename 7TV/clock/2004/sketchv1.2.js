let h=960; //Ширина экрана
let w=720; //Высота экрана
var song;

function setup() {
  canvas = createCanvas(h, w); //Создание экрана с заданной шириной и высотой
  angleMode(DEGREES);
}

function draw() {
  background(15,15,130);
  translate(h/2,w/2); //Центровка на основе ширины и высоты
  rotate(-90);
  
  let hr = hour(); //Часы
  let mn = minute(); //Минуты
  let sc = second(); //Секунды
  let secAngle=map(sc, 0, 60, 0, 360); //Угол секундной стрелки
  let minAngle=map(mn, 0, 60, 0, 360) + map(secAngle, 0, 360, 0, 6); //Угол минутной стрелки
  let hourAngle = map(hr % 12, 0, 12, 0, 360) + map(minAngle, 0, 360, 0, 30); //Угол часовой стрелки
  let i;
  let j;
  let offset=210; //Отдаление от центра (для точек)
  
  stroke(255);
  
  noFill();

  drawArcs(secAngle);
  drawOverlay(secAngle);
  drawArc();

  drawDots(i, offset);

  drawHours(hourAngle);
  drawMinutes(minAngle);
  drawSeconds(secAngle);
}

function drawArcs(secAngle){
  strokeWeight(5);
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
}

function drawOverlay(secAngle){
  if(secAngle>=0 & secAngle<90) {
    push();
        noStroke();
        fill(15,15,130);
        arc(0,0,550,550, secAngle, 90);
        arc(0,0,550,550, secAngle+180, 360);
    pop();
  }
  if(secAngle>=90 & secAngle<180) {
    push();
        noStroke();
        fill(15,15,130);
        push();
          rotate(secAngle-180);
          arc(0,0,550,550, 0, 90);
        pop();
        arc(0,0,550,550, 90, secAngle);
    pop();
  }
  if(secAngle>=180 & secAngle<360) {
    push();
        noStroke();
        fill(15,15,130);
        arc(0,0,550,550, secAngle-180, secAngle);
        arc(0,0,550,550, 0, 90);
    pop();
  }
}

function drawArc(){
  strokeWeight(12);
  arc(0,0,506,506, 0, 270);
  push();
      noStroke();
      fill(15,15,130);
      arc(0,0,520,520, 270, 360);
  pop();
}

function drawDots(i, offset) {
  strokeWeight(20);
  for (i=1;i<5;i++){
    point(cos(90*i)*offset,sin(90*i)*offset);
  }

  strokeWeight(5); 
  for (i=1;i<=4;i++){
    if (i<4){
      for (j=1;j<9;j++) {
        if (j%3!=0)
          point(cos(30*j)*offset,sin(30*j)*offset);
        }
    } else {
        for (j=1;j<15;j++)
      point(cos(-6*j)*offset,sin(-6*j)*offset);
    }
  }
}

function drawHours(hourAngle){
  strokeWeight(21);
  push();
  rotate(hourAngle);
  stroke(15,15,130);
  line(0,0,145,0);
  pop();

  strokeWeight(20);
  push();
  rotate(hourAngle);
  line(0,0,145,0);
  pop();
}

function drawMinutes(minAngle){
  strokeWeight(16);
  push();
  stroke(15,15,130);
  rotate(minAngle);
  line(0,0,190,0);
  pop();

  strokeWeight(15);
  push();
  rotate(minAngle);
  line(0,0,190,0);
  pop();
}

function drawSeconds(secAngle){
  strokeWeight(6);
  push();
  stroke(15,15,130);
  rotate(secAngle);
  line(0,0,180,0); //Секундная стрелка часов
  pop();
  
  push();
  stroke(15,15,130);
  rotate(secAngle-180);
  line(0,0,25,0); //Вторая часть секундной трелки часов
  pop();

  strokeWeight(5);
  push();
  rotate(secAngle);
  line(0,0,180,0); //Секундная стрелка часов
  pop();
  
  push();
  rotate(secAngle-180);
  line(0,0,25,0); //Вторая часть секундной трелки часов
  pop();
}
