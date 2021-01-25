class Ball
{
  constructor(x,y)
  {
    var ball_options ={ restitution: 1.0 }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
  }
   
  display()
  {
    push();
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20,20);
    fill("blue");
    pop();
  }
};