var ball,img,paddle,ballimg;
function preload() {
img=loadImage("paddle.png")
  /* preload your images here of the ball and the paddle */
  ballimage=loadImage("ball.png")
}
function setup() {
  createCanvas(400, 400);
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
   paddle=createSprite(380,200,20,20)
  paddle.addImage("imge",img)
  ball=createSprite(29,200,20,20)
  ball.addImage("yo",ballimage)
  /* give the ball an initial velocity of 9 in the X direction */
  paddle.velocityY=0;
paddle.velocityX=0;
   ball.velocityY=3;
ball.velocityX=-1;
}

function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-3;  /* what should happen when you press the UP Arrow Key */
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=3;
    /* what should happen when you press the UP Arrow Key */
  }
  randomVelocity()
  edges=createEdgeSprites()
  ball.bounceOff(paddle)
  ball.bounceOff(edges[0])
  ball.bounceOff(edges[2])
  ball.bounceOff(edges[3])
   paddle.bounceOff(edges[2])
  paddle.bounceOff(edges[3])
  ball.bounceOff(paddle)
  
  drawSprites();
  
}

function randomVelocity()
{
   if(ball.bounceOff(paddle)){
  
  ball.velocityY=-3;
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
     
}
}
