
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao;
var bola;
var quadrado;
var retangulo;
let world;
let engine;





function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
    var chao_options={
		isStatic:true
	}
	var quadrado_options={
		restituiton:0.1,
		frictionAir:0.05
	}
	var retangulo_options={
		restituiton:0.5,
		frictionAir:0.02
	}
	var bola_options={
		restituiton: 2.2,
		frictionAir: 0.01
	}
	bola= Bodies.circle(220,10,60, bola_options);
	World.add(world,bola)

	quadrado= Bodies.rectangle(350,50,100,100, quadrado_options);
	World.add(world,quadrado);

    fill("red")
	retangulo= Bodies.rectangle(70,50,100,100, retangulo_options);
	World.add(world,retangulo);

	chao= Bodies.rectangle(200,390,800,20,chao_options);
	World.add(world,chao);
	


	rectMode(CENTER);

	ellipseMode(RADIUS)

	
  
}


function draw() {
	Engine.update(engine);
  background("green");
  
  

  ellipse(bola.position.x,bola.position.y,60);
  rect(quadrado.position.x,quadrado.position.y,100,100);
  rect(retangulo.position.x,retangulo.position.y,100,100);
  rect(chao.position.x,chao.position.y,800,20);
  
 
}



