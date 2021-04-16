class Ground{
//properties- characters and qualities.
constructor(){        //to start props
    var goptions={isStatic:true }
    this.body=Bodies.rectangle(400,390,800,30,goptions);
    World.add(world,this.body);


}
//functions- what the object should do

display(){
    push ();
    fill("red");
    var pos=this.body.position
    rectMode(CENTER);
    rect(pos.x,pos.y,800,30);
    pop();
}

}    //class means blueprint