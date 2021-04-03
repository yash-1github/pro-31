class drop { 
  constructor(x){

    this.body = bodies.circle(x, -30 , 10);
    World.add(wor , this.body);
  }
display(){ 

     ellipseMode(RADIUS);
     ellipse(this.body.position.x , -30, 10);
}

}