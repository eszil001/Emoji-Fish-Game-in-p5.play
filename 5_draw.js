
function draw() 
{
  background(135,206,235);

  // newGame(); 
  // Displays the image at point (0, height/2) at half size
  //image(img, 0, 0, img.width/10, img.height/10);
    
player.bounce(player2 || player3);
    
player2.bounce(player);
player2.bounce(player3);

player3.bounce(player);
player3.bounce(player2);
 
// PLAYER 1 CONTROLS
    
  
//collects coins////////////////////////////////////////////////////
 player.overlap(coins, getCoin_player_1);
 player2.overlap(coins, getCoin_player_2);
 player3.overlap(coins, getCoin_player_3);
//the walls cant be passed
 walls.immovable;
 player.collide(walls);
 player2.collide(walls);
 player3.collide(walls);
//borders //////////////////////////////////
  player.bounce(wallTop);
  player.bounce(wallBottom);
  player.bounce(wallLeft);
  player.bounce(wallRight);
  
  player2.bounce(wallTop);
  player2.bounce(wallBottom);
  player2.bounce(wallLeft);
  player2.bounce(wallRight); 
  
  player3.bounce(wallTop);
  player3.bounce(wallBottom);
  player3.bounce(wallLeft);
  player3.bounce(wallRight);
    

//the score for 1 player needs to be made for 2  ///////////////////////////
  drawSprites();
  fill(255);
  noStroke();
  textSize(72);
  textAlign(CENTER, CENTER);
  ///////////////////////////////////////////////////////////
    text(score_player_1, 150, 50);
    text(score_player_2, 1000, 50);
    text(score_player_3, 600, 530);
    fill(255);
 //////////////////////////////////////
    //player2 = yellow
    //player1 = blue
    //player3 = whale
///////////////////////////////////////////////////////////////
  if(score_player_1 >= 20)
      {
         text("Blue fish is the survivor!" + "\n" + "Press - V - for VENGENCE", width/2, height/2); 
         player.velocity.x = player.velocity.y = 0;
         player2.velocity.x = player2.velocity.y = 0;
         player3.velocity.x = player3.velocity.y = 0;



      }
  if(score_player_2 >= 20)
      {
         text("Yellow fish is the survivor!" + "\n" + "Press - V - for VENGENCE", width/2, height/2); 
          player.velocity.x = player.velocity.y = 0;
         player2.velocity.x = player2.velocity.y = 0;
         player3.velocity.x = player3.velocity.y = 0;
          
      }
  if(score_player_3 >= 20)
      {
         text("Whale is the survivor!" + "\n" + "Press - V - for VENGENCE", width/2, height/2); 
          player.velocity.x = player.velocity.y = 0;
         player2.velocity.x = player2.velocity.y = 0;
         player3.velocity.x = player3.velocity.y = 0;
      }
     
/// how to make game stop once one player wins?
//    if(score_player_1 || score_player_2 || score_player_3 == 20)
//        {
//        }
  /*if (coins.length == 0) 
  {
    text("you win!", width/2, height/2);
    
  } */
fill(255);
noStroke();
textSize(10);
text("Blue Fish " + "\n" + "T + F + G + H",54,90);
text("Whale" + "\n" + "I + J + K + L",600,680);
text("Yellow Fish" + "\n" + "W + A + S + D",1100,90);
}

   
function keyReleased() {
     if(key == "G")
    {
    player.velocity.y = 0;
    }  
 if(key == "T")
    {
    player.velocity.y = 0;
    }
   if(key == "H")
    {
    player.velocity.x =0;
    }
  if(key == "F")
    {
    player.velocity.x = 0;
    }
  
    
//Player 2 CONTROLS
        
    if(key == "S")
    {
    player2.velocity.y = 0;
    }  
 if(key == "W")
    {
    player2.velocity.y = 0;
    }
   if(key == "D")
    {
    player2.velocity.x =0 ;
    }
  if(key == "A"|| keyCode == 37)
    {
    player2.velocity.x = 0;
    }
   
 // player 3  CONTROLS         
    if(key == "K")
    {
    player3.velocity.y = 0;
    }  
 if(key == "I")
    {
    player3.velocity.y = 0;
    }
   if(key == "L")
    {
    player3.velocity.x =0 ;
    }
  if(key == "J")
    {
    player3.velocity.x = 0;
    }
    
    
}

function keyPressed()
{
   if(key == "G")
    {
    player.velocity.y = 5;
    }  
 if(key == "T")
    {
    player.velocity.y = -5;
    }
   if(key == "H")
    {
    player.velocity.x =5 ;
    }
  if(key == "F")
    {
    player.velocity.x = -5;
    }
  
    
//Player 2 CONTROLS
        
    if(key == "S")
    {
    player2.velocity.y = 5;
    }  
 if(key == "W")
    {
    player2.velocity.y = -5;
    }
   if(key == "D")
    {
    player2.velocity.x =5 ;
    }
  if(key == "A" || keyCode == 37)
    {
    player2.velocity.x = -5;
    }
   
 // player 3  CONTROLS         
    if(key == "K")
    {
    player3.velocity.y = 5;
    }  
 if(key == "I")
    {
    player3.velocity.y = -5;
    }
   if(key == "L")
    {
    player3.velocity.x =5 ;
    }
  if(key == "J")
    {
    player3.velocity.x = -5;
    }
    
    if(key == "V")
    {
        newGame();
    }
    
}
/*
function newGame() 
{
   // updateSprites(walls);
   // console.log("amuping")
}*/
