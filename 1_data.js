
var coins;
var walls;
var player;
var player2;
var player3;
var score_player_1 = 0;
var score_player_2 = 0;
var score_player_3 = 0;
var y = 100;
var wallTop, wallBottom, wallLeft, wallRight;
var WALL_THICKNESS = 30;
var key_pressed;

//var gameOver;



function getCoin_player_1(player, coin) 
{
  coin.remove();
  score_player_1 += 1;
}
function getCoin_player_2(player, coin) 
{
  coin.remove();
  score_player_2 += 1;
}
function getCoin_player_3(player, coin) 
{
  coin.remove();
  score_player_3 += 1;
}