class Form {
  constructor() {
      this.buttonOP = select('#butt');
      this.buttonOP1 = select('#butt1');
      this.buttonOP2 = select('#butt2');
      this.buttonOP3 = select('#butt3');
      this.buttonOP4 = select('#butt4');
  }

  hide() {
    this.buttonOP.hide();
    this.buttonOP1.hide();
    this.buttonOP2.hide();
    this.buttonOP3.hide();
    this.buttonOP4.hide();
  }

  display(){
  this.buttonOP.position(windowWidth/2-110, windowHeight/2 - 100);
  this.buttonOP1.position(windowWidth/2-110, windowHeight/2);
  this.buttonOP2.position(windowWidth/2-110, windowHeight/2 + 100);
  this.buttonOP3.position(windowWidth/2-110, windowHeight/2 + 200);
  this.buttonOP4.position(windowWidth/2-110, windowHeight/2 + 300);

  
  this.buttonOP.mousePressed(()=>{
     gameState = 1;
     this.buttonOP.hide();
     this.buttonOP1.hide();
     this.buttonOP2.hide();
     this.buttonOP3.hide();
     this.buttonOP4.hide();
  })

  this.buttonOP1.mousePressed(()=>{
    gameState = 4;
    this.buttonOP.hide();
    this.buttonOP1.hide();
    this.buttonOP2.hide();
    this.buttonOP3.hide();
    this.buttonOP4.hide();
 })

 this.buttonOP2.mousePressed(()=>{
  gameState = 6;
  this.buttonOP.hide();
  this.buttonOP1.hide();
  this.buttonOP2.hide();
  this.buttonOP3.hide();
  this.buttonOP4.hide();
})

this.buttonOP3.mousePressed(()=>{
gameState = 8;
this.buttonOP.hide();
this.buttonOP1.hide();
this.buttonOP2.hide();
this.buttonOP3.hide();
this.buttonOP4.hide();
})

this.buttonOP4.mousePressed(()=>{
gameState = 10;
this.buttonOP.hide();
this.buttonOP1.hide();
this.buttonOP2.hide();
this.buttonOP3.hide();
this.buttonOP4.hide();
})

  fill("white");
  textSize(60);
  textFont(font);
  text("FLASHBACKS", windowWidth/2-180, windowHeight/4-130);
  textSize(15);
  textFont(font);
  text("Story:", windowWidth/3-550, windowHeight/2+70);
  text("You are a caveman who has been teleported to the future.", windowWidth/3-550, windowHeight/2+90);
  text("You have already collected some parts to build your time machine...", windowWidth/3-550, windowHeight/2+105);
  text("You have to collect 4 more parts to return to your home(i.e. Egypt)", windowWidth/3-550, windowHeight/2+120);
  text("Objective:", windowWidth/3-550, windowHeight/2+155);
  text("You need to collect 4 more parts of your time machine which apperar", windowWidth/3-550, windowHeight/2+170);
  text("The controls will be seen when you hit play", windowWidth/3-550, windowHeight/2+185);
  text("But beware! There are zombies to stop you!", windowWidth/3-550, windowHeight/2+200);
  text("Note: You have to keep pressing the up arrow key to shoot as it generates power", windowWidth/3-550, windowHeight/2+230);
  text("The parts appear only after every 20 points...", windowWidth/3-550, windowHeight/2+245);
  text("You get 5 points each for killing a zombie", windowWidth/3-550, windowWidth/2+260);
  text("Some zombies are invincible so have to jump over them", windowWidth/3-550, windowHeight/2+275);
  textSize(30);
  text("Good Luck!", windowWidth/2-720, windowHeight/2+315);
}
}