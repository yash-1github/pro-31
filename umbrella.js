class umbrella {
  
    constructor(x,y){   
        var options = {
         isstatic:true,
      
        }
        this.image= loadImage("Walking Frame/walking_1.png");
        this.umbrella = bodies.circle(x,y,50,options);
        this.radius = 50;
     World.add(wor, this.umbrella);      

  }
  display(){
var pos = this.umbrella.position;
imageMode(CENTER);
image(this.image, pos.x,pos.y+80 , 300,300);
}
}