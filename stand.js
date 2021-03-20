class Stand{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
        }
        
        this.ground = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.ground);
    }
    display(){
        var pos = this.ground.position;
        push()
        fill(110,38,102);
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}