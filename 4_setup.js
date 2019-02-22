var img;
function setup() {
createCanvas(1200, 700);
  
  

/////images for the emoji
fish1 = loadImage("assets/rsz_1fish1.png");
fish2 = loadImage("assets/rsz_fish2.png");
fish3 = loadImage("assets/rsz_fish3.png");
food = loadImage("assets/rsz_food.png");
wal = loadImage("assets/rsz_walls.png");
// groups for the food/coins and the walls/fishin pools    
  coins = new Group();
  walls = new Group();
/////////////////////////////////////////////////////////////the number of food
  for (var i = 0; i < 90; i++) 
  {
    var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(224,255,255);
      
    c.addImage(food);
    coins.add(c);
     
  }
     for (var i = 0; i < 7; i++)
     {
    var w = createSprite(
      random(100, width-100),
      random(100, height-100),
      random(5, 5), random(50, 250));
    w.shapeColor = color(0);
    walls.add(w);
    w.addImage(wal);

     }
  walls.immune = true;
  
/////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////
//player
  player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
  player.addImage(fish1);
//player2
  player2 = createSprite(1100, 50, 40, 40);
  player2.shapeColor = color(255,0,0);
  player2.addImage(fish2);

//player3
  player3 = createSprite(600, 640, 40, 40);
  player3.shapeColor = color(0,0,255);
  player3.addImage(fish3);

    
//borders  WORK
  wallTop = createSprite(width/2, -WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallTop.immovable = true;
  
  wallBottom = createSprite(width/2, height+WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
  wallBottom.immovable = true;
  
  wallLeft = createSprite(-WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallLeft.immovable = true;
  
  wallRight = createSprite(width+WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
  wallRight.immovable = true;
    
//the black walls that players cant go pass
  
  }

function newGame()
{
    
    console.log(coins.length);
    score_player_1 = 0;
    score_player_2 = 0;
    score_player_3 = 0;
    
    player.remove();
    player2.remove();
    player3.remove();
    
     player = createSprite(50, 50, 40, 40);
  player.shapeColor = color(255);
  player.addImage(fish1);
//player2
  player2 = createSprite(1100, 50, 40, 40);
  player2.shapeColor = color(255,0,0);
  player2.addImage(fish2);

//player3
  player3 = createSprite(600, 640, 40, 40);
  player3.shapeColor = color(0,0,255);
  player3.addImage(fish3);
///////////////////////////////////////////////    
    var i = coins.length - 1;
    while(coins.length != 0)
        {
           coins[i].remove();
            i--;
        }
    coins = new Group();
    for (var i = 0; i < 90; i++) 
  {
   var c = createSprite(
      random(100, width-100),
      random(100, height-100),
      10, 10);
    c.shapeColor = color(224,255,255);
    coins.add(c);
    c.addImage(food);
  }
 ////////////////////////////////////////////////
     var i = walls.length - 1;
    while(walls.length != 0)
        {
           walls[i].remove();
            i--;
        }
    walls = new Group();
   for (var i = 0; i < 7; i++)
     {
    var w = createSprite(
      random(100, width-100),
      random(100, height-100),
      random(5, 5), random(50, 250));
    w.shapeColor = color(0);
    walls.add(w);
    w.addImage(wal);

     }
  walls.immune = true;
    
}