class Box {
    constructor(x,y,width,height){
        var boption={restitution:0.5};
        this.box=Bodies.rectangle(x,y,width,height,boption);
        this.width=width;
        this.height=height;
        World.add(world,this.box);
    }

    display(){
        var pos=this.box.position;
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y)
        rotate(this.box.angle);
        rect(0,0,this.width,this.height);
        pop();
    }

}