var issImg, spaceImg, spcrftImg1, spcrftImg2, spcrftImg3, spcrftImg4;
var iss, spacecraft, hasDocked;
var spcx, edges;

function preload()
{
  spaceImg = loadImage("spacebg.jpg");

  issImg = loadImage("iss.png");

  spcrftImg1 = loadImage("spacecraft1.png");
  spcrftImg2 = loadImage("spacecraft2.png");
  spcrftImg3 = loadImage("spacecraft3.png");
  spcrftImg4 = loadImage("spacecraft4.png");
}

function setup() 
{
  createCanvas(800,400);
  
  hasDocked = false;

  edges = createEdgeSprites();

  

  iss = createSprite(400, 100);
  iss.addImage(issImg);
  iss.scale = 0.8;

  spcx = Math.round(random(80, 620));

  spacecraft = createSprite(spcx, 300);
  spacecraft.addImage(spcrftImg1);
  spacecraft.scale = 0.2;
  
  

}
 


function draw() 
{
  background(spaceImg);  

  spacecraft.bounceOff(edges);
  





  if(!hasDocked)
  {
    

    if(keyWentDown("right_arrow"))
    {
      spacecraft.addImage(spcrftImg4);
      spacecraft.setVelocity(5, 0);
    }
    
    if(keyWentUp("right_arrow")){
      spacecraft.setVelocity(0, 0);
    }


    if(keyWentDown("left_arrow"))
    {
      spacecraft.addImage(spcrftImg3);
      spacecraft.setVelocity(-5, 0);
    }
    
    if(keyWentUp("left_arrow")){
      spacecraft.setVelocity(0, 0);
    }


    if(keyWentDown("up_arrow"))
    {
      spacecraft.addImage(spcrftImg1)
      spacecraft.setVelocity(0, -5);
    }
    
    if(keyWentUp("up_arrow")){
      spacecraft.setVelocity(0, 0);
    }


    if(keyWentDown("down_arrow"))
    {
      spacecraft.addImage(spcrftImg2);
      spacecraft.setVelocity(0, 5);
    }
    
    if(keyWentUp("down_arrow")){
      spacecraft.setVelocity(0, 0);
    }

    if(spacecraft.x-iss.x >= -42 && spacecraft.y-iss.y <= 60)
    {
      hasDocked = true;
    }

  }

  if(hasDocked)
  {
    fill("white");
    textSize(30);
    text("Docking Successful", 250, 350);

    spacecraft.setVelocity(0,0);
  }

  

  drawSprites();
}