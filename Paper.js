class Paper {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.body = Bodies.circle(x, y, radius, options);
    this.radius = radius;

    World.add(world, this.body)
    }
    display(){
        var pos = this.body.position
        fill("cyan")
        rectMode(CENTER)
        circle(pos.x,pos.y,this.radius)
        }
}