class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.01,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.Visibility = 255;
        World.add(world,this.body);
    }
    display(){
        
        if(this.body.speed<3){
            var pos = this.body.position;
            push();
            this.Visibility = this.Visibility-5;
            tint(255,this.Visibility);
            strokeWeight(2);
            stroke("brown");
            fill(26,224,85);
            rectMode(CENTER);
            rect(pos.x,pos.y,this.width,this.height);
            pop();
        }
        else{
            push();
            World.remove(world,this.body);
            pop();
        }
        
    }

    SCORE(){
        if(this.Visibility<0 && this.Visibility >-10 && gameState === "launched"){
            score++;
        }
    }
}