var gameState=0;
var db;
var games;
var player,form;
var playerCount=null;
var playerInfo;
var c1,c2,c3,c4;
var cars=[];

function setup()
{
    createCanvas(displayWidth,displayHeight);

    db=firebase.database();
    games=new game();
    games.getState();
    games.start();

}

function draw()
{
    background(224);

    if(playerCount==4)
    {
        games.changeState(1);
    }

    if(gameState==1)
    {
        games.play();

    drawSprites();

    }

}