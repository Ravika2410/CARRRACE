class Form
{
    constructor()
    {
        this.input=createInput("Enter Your Name:");
        this.button=createButton("PLAY");
        this.greetings=createElement("h2");
    }

    display()
    {
        var title=createElement("h1");
        title.html("Multi-Player Game");
        title.position(270,50);

        this.input.position(300,150);
        this.input.size(200,50);

        this.button.position(350,200);

        this.button.mousePressed(()=>{
        console.log("n="+playerCount);
            this.input.hide();
        this.button.hide();

        var Name=this.input.value();
        playerCount+=1;
        player.index=playerCount;
        player.updateCount(playerCount);
        player.updateName(Name);
        console.log("w="+playerCount);

        this.greetings.html("Welcome  "+Name);        
        this.greetings.position(400,400);

        }
        );
    }

    hide()
    {
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }
            
}