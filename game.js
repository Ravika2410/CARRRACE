class game
{
    constructor()
    {
        console.log("game constructor called");
    }

    getState()
    {
        db.ref("gameState").on("value",function(data){
            gameState=data.val();
        },function(){});
    }

 async start()
    {
        if(gameState==0)
        {

            player=new Player();
            playerCount=await db.ref("playerCount").once("value");

            if(playerCount.exists())
            {

                playerCount=playerCount.val();
                console.log("a="+playerCount);

            }

            form=new Form();
            form.display();

        }

        c1=createSprite(100,750,20,20);
        c2=createSprite(200,750,20,20);
        c3=createSprite(300,750,20,20);
        c4=createSprite(400,750,20,20);

        cars=[c1,c2,c3,c4];

    }

    changeState(s)
    {

        db.ref("/").update({"gameState":s});

    }

    play()
    {
        form.hide();

        var a=100,x=0,y,o=0;

        Player.getPlayerInfo();

        if(playerInfo!=undefined)
      {
        for(var i in playerInfo)
        {
            o=o+1;
            console.log(o);

            x=x+200;
            console.log(x);

            y=displayHeight-playerInfo[i].distance;
            console.log(cars);
            console.log(cars[o-1]+"  " +(o-1));

            cars[o-1].x=x;
            cars[o-1].y=y;

            if(i=="Player"+player.index)
            {

                fill("red");
                cars[o-1].shapeColor="red";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[o-1].y;

            } 
            else 
            {

                fill("black");
                cars[o-1].shapeColor="black";

            }

            textSize(20);
            text(playerInfo[i].Name.slice(0,5),a,200);
            text(playerInfo[i].Score,a,240);
            a+=70;

        }
      }

      if(keyIsDown(32)&&player.index!=null)
      {
          console.log(100);

          player.distance+=50;
          player.updateDistance();
      }

      console.log(player.index+"  is playing");

    }

}
