var x=85
var y=95
var opcao = 1
var tela = 0
var arvore,sky,fundo
var xs,ys,sapo
var caminhao,xcam,ycam
var rua
var caminhao2,xcam2,ycam2
var pontos,col,bateu,bateu2
var kill,k,ki
var tempo
var over
var telaverde,som

function preload(){
  arvore=loadImage('arvores.png');
  sky=loadImage('sky.png');
  fundo=loadImage('fundo3.png');
  caminhao=loadImage('caminhao.png');
  sapo=loadImage('sapo.png');
  rua=loadImage('rua.png');
  caminhao2=loadImage('caminhao2.png');
  caminhao3=loadImage('caminhao3.png');
  over=loadImage('gameover.png');
  telaverde=loadImage('telaverde.png');
  soundFormats('mp3');
  som=loadSound('som',loadOpen);
  
}
function loadOpen(){
  som.play();
}

function setup() {
  createCanvas(400, 400);
  //x e y do sapo
  xs=180
  ys=360
  //x e y do caminhao1
  xcam=-140
  ycam=50
  //x e y caminhao2
  xcam2=-200
  ycam2=175
  //x e y caminhao3
  xcam3=-400
  ycam3=300
  //pontos
  pontos=0
  //colissoes
  col=false
  bateu=false
  bateu2=false
  kill=false
  k=false
  ki=false
  //tempo
  tempo=0
}

function draw() {
  background(220);
    if(tela==0){
      menu();
    }
    if(tela==1){
      jogar();
    }
    if(tela==2){
      comojogar();
    }
    if(tela==3){
      creditos();
    }
    
}
function menu(){
  image(fundo,-50,-30)
  
  rect(x,y,185,45)
  
  textSize(40);
  
  
  textSize(32);
  text("Jogar",90,125);
  text("Como jogar",90,225);
  text("Créditos",90,325);
}
function jogar(){
  fase1();
}

function comojogar(){
  image(arvore,0,0)
  textSize(30)
  text("Usando as setas do",70,140);
  text("teclado, para desviar",60,180);
  text("dos caminhões na rua",60,220);
  text("e colete os quadrados.",60,260)
  text("Use o ESC para voltar",60,300);
  text("ao menu do jogo.",60,340);
}

function creditos(){
  image(sky,0,-300)
  textSize(30)
  text("Desenvolvido por:",90,140)
  text("Juan Pablo",120,180)
  text("Educador:",90,220)
  text("Rummenigge",120,260)
}



function keyPressed(){
  if(key=="ArrowUp" && y>125){
    y=y-100
   opcao=opcao-1
  }
  if(key=="ArrowDown" && y<200){
    y=y+100
    opcao=opcao+1
  }
  if(key == "Enter"){
  tela=opcao
  }
  if(key == "Escape"){
    tela=0
  }


}
function fase1(){
  image(rua,0,0)
  //caminhao1 e movimento
  image(caminhao,xcam,ycam,110,65)
  xcam=xcam+1.5;
  if(xcam>420){
    xcam=-140;
  }
  //caminhao2
  image(caminhao2,xcam2,ycam2,110,65)
  xcam2=xcam2+1
  if(xcam2>500){
    xcam2=-200
  }
  
  //imagem e movim do sapo
  image(sapo,xs,ys,50,40)
  if(keyIsDown(LEFT_ARROW)){
      xs-=2
      xs=constrain(xs,0,355)
    }
    if(keyIsDown(RIGHT_ARROW)){
      xs+=2
      xs=constrain(xs,0,355)
    }
    if(keyIsDown(UP_ARROW)){
      ys-=2
      ys=constrain(ys,0,365)
    }
    if(keyIsDown(DOWN_ARROW)){
      ys+=2
      ys=constrain(ys,0,365)
    }
    
  rect(320,10,10,10)
  col=collideRectRect(xs,ys,50,40,320,10,10,10);
    if(col){
    pontos=+1
    }
  textSize(15)
  text(pontos,16,16)
  if(pontos>0){
    fase2();
    
  }
  textSize(15)
  text("Fase 1",340,16)
  kill=collideRectRect(xs,ys,50,40,xcam,ycam,110,65);
    if(kill==true){
      ys=360
    xs=180
    kill=false
    k=false
    }
  k=collideRectRect(xs,ys,50,40,xcam2,ycam2,110,65);
    if(k==true){
      ys=360
      xs=180
      kill=false
      k=false
      }
  ki=collideRectRect(xs,ys,50,40,xcam3,ycam3,110,55);
    if(ki==true){
      ys=360
      xs=180
      kill=false
      k=false
    }
  tempo++;
  textSize(15)
  text((tempo/100).toFixed(0),180,16)
  if(tempo>4500){
    gameover();
  }

}




function fase2(){
  textSize(15)
  text((tempo/100).toFixed(0),180,16)
  col=false
  image(rua,0,0)
  //caminhao1 e movimento
  image(caminhao,xcam,ycam,110,65)
  xcam=xcam+2;
  if(xcam>420){
    xcam=-140;
  }
  //caminhao2
  image(caminhao2,xcam2,ycam2,110,65)
  xcam2=xcam2+4
  if(xcam2>500){
    xcam2=-200
  }
  //imagem e movim do sapo
  image(sapo,xs,ys,50,40)
  if(keyIsDown(LEFT_ARROW)){
      xs-=0.5
      xs=constrain(xs,0,355)
    }
    if(keyIsDown(RIGHT_ARROW)){
      xs+=0.5
      xs=constrain(xs,0,355)
    }
    if(keyIsDown(UP_ARROW)){
      ys-=0.5
      ys=constrain(ys,0,365)
    }
    if(keyIsDown(DOWN_ARROW)){
      ys+=0.5
      ys=constrain(ys,0,365)
    }
    
  rect(300,390,10,10)
  bateu=collideRectRect(xs,ys,50,40,300,390,10,10);
    if(bateu){
    pontos=2
    }
  textSize(15)
  text(pontos,16,16)
  if(pontos>1){
    fase3();
  }
  textSize(15)
  text("Fase 2",340,16)
}
  
function fase3(){
  textSize(15)
  text((tempo/100).toFixed(0),180,16)
  col=false
  image(rua,0,0)
  //caminhao1 e movimento
  image(caminhao,xcam,ycam,110,65)
  xcam=xcam+2;
  if(xcam>420){
    xcam=-140;
  }
  //caminhao2
  image(caminhao2,xcam2,ycam2,110,65)
  xcam2=xcam2+2.5
  if(xcam2>500){
    xcam2=-200
  }
  image(caminhao3,xcam3,ycam3,110,55)
  xcam3=xcam3+3
  if(xcam3>500){
    xcam3=-400
  }
  //imagem e movim do sapo
  image(sapo,xs,ys,50,40)
  if(keyIsDown(LEFT_ARROW)){
      xs-=0.2
      xs=constrain(xs,0,355)
    }
    if(keyIsDown(RIGHT_ARROW)){
      xs+=0.2
      xs=constrain(xs,0,355)
    }
    if(keyIsDown(UP_ARROW)){
      ys-=0.2
      ys=constrain(ys,0,365)
    }
    if(keyIsDown(DOWN_ARROW)){
      ys+=0.2
      ys=constrain(ys,0,365)
    }

  
  textSize(15)
  text("Fase 3",340,16)
  textSize(15)
  text(pontos,16,16)
  rect(80,20,10,10)
  bateu2=collideRectRect(xs,ys,50,40,80,20,10,10);
    if(bateu2){
      Fim();
    }
}
function Fim(){
  background(220);
  image(telaverde,0,0,400,400)
  textSize(40);
  text("Parabéns, você",70,150);
  text("terminou o jogo.",70,190);
  tempo=0
    
  }
  

function gameover(){
  background(220);
  image(over,0,0,400,400)

}