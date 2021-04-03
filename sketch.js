const engine = Matter.Engine;
const World = Matter.World;
const bodies = Matter.Bodies;
var eng , wor , drop1,man;
var dr= [];
function preload(){
    
}

function setup(){
    createCanvas(400,800);
    background(225);
   eng = engine.create();
   wor = eng.world;

   man = new umbrella(200,200);
   
    
}

function draw(){
  engine.update(eng);
   
  if(frameCount%10 === 0){
      drop1 = new drop(random(0,400) ,-20);
      dr.push(drop1);
  }
  

  for(var i=0; i<dr.length; i++){
    dr[i].display();
  }
  console.log(dr[i]);
  man.display();


}   

