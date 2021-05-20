const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var wizard, wizardimage;
var backgroundimage, bg;

var pew, pewImage;

var monster, monsterImage, monsterGroup;

function preload(){
	backgroundimage = loadImage("images/castlebackground.png");
	wizardimage = loadAnimation("images/wizardgif/frame0.png", "images/wizardgif/frame1.png", "images/wizardgif/frame2.png", "images/wizardgif/frame3.png", "images/wizardgif/frame4.png", "images/wizardgif/frame5.png", "images/wizardgif/frame6.png", "images/wizardgif/frame7.png")
	
	monsterImage = loadAnimation("images/monstergif/monster1.png", "images/monstergif/monster2.png" )

	pewImage = loadImage("images/Pewpew.png");
}


function setup() {
	createCanvas(windowWidth, windowHeight);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	bg = createSprite(windowWidth/2, windowHeight/2);
	bg.velocityX=-3;
	bg.addImage(backgroundimage);
	bg.scale = 2.5

	wizard = createSprite(width/2 - 500, height/2 + 200);
	wizard.addAnimation("running", wizardimage);
	
	pew = Bodies.circle(width/2 - 500 + 80, height/2 + 200 - 170, 100, {isStatic: false});
	World.add(world, pew);

	var rope = new Rope(pew.body, {x: 200, y: 522.5} )
	//console.log(width/2 - 500 + 80, height/2 + 200 - 170)
}

function draw() {
Engine.update(engine)
  //background(backgroundimage);
  if(bg.x < 1000){
	  bg.x = windowWidth/2;

  }
  //console.log(pew.position.x, pew.position.y); 

  
//spawnMonster();
drawSprites();
ellipseMode(CENTER);
image(pewImage, pew.position.x, pew.position.y, 100, 100)
}




function mouseDragged(){

	}



function spawnMonster(){
 if(frameCount % 20 === 0){
monster = createSprite(windowWidth+10, random(200, windowHeight-100))
monster.velocityX = -5;
monster.addAnimation("monster", monsterImage)

 }
}





			
