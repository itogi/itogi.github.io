var h=960; //Ширина экрана
var w=720; //Высота экрана

function setup() {
  canvas = createCanvas(h, w); //Создание экрана с заданной шириной и высотой
  angleMode(DEGREES);
  clockNum = loadFont('/CooperBlackStd.ttf');
}

function draw() {
  textFont(clockNum);
  textSize(48);
  background(255);
  translate(h/2,w/2); //Центровка на основе ширины и высоты
  rotate(-90);
  
  let secAngle=second()*6; //Угол секундной стрелки
  let offset=196; //Отдаление от центра (для точек)
  let i;
  
  noStroke();
  fill(0);
  rect(-321,282,47,147)
  fill(255);
  rect(-318,285,41,69)

  push();
    fill(0);
    rotate(90);
    textAlign(CENTER);
    if(hour()<10){
       text("0"+hour(),320,312);
    } else{
      text(hour(),318,312);
    }
    fill(255);
    if(minute()<10){
      text("0"+minute(),392,312);
    } else{
      text(minute(),392,312);
    }
  pop();

  for (i=0;i<4;i++){
    push();
      noFill();
      strokeWeight(6);
      stroke(0);
      rotate(90*i);
      point(offset,0);
    pop();
  }

  push();
    rotate(secAngle);
    noStroke();
    fill(0);
    rect(-25,-3,225,6);
  pop();
}
