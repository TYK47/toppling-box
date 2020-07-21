class Ground {
    constructor( x,y,width,height ) {
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle( x,y,width,height,option )
        World.add(world,this.body) 
        this.w = width
        this.h = height
    }
    display() {
        var body1 = this.body.position
        rectMode(CENTER) 
        rect(body1.x,body1.y,this.w,this.h)
    }
}