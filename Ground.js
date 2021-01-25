class Ground
{
  constructor(x,y)
  {
    var options = { isStatic : 1.0 }
    this.body=Bodies.rectangle(x,y,1200,30,options);
    this.width=800;
    this.height=30;
    World.add(world,this.body);

  }
   
  display()
  {
    push();
    rectMode(CENTER);
    fill("brown");
    rect(this.body.position.x,this.body.position.y,1200,30);
    pop();
  }
};