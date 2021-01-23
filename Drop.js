class Drop{

    constructor(x, y){

        var options = {

        }
        

        this.body = Matter.Bodies.circle(x, y, 3, options)

        World.add(world, this.body)
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0, 800), y: random(0, 1200)})
        }
        
    }

    display(){

        var pos = this.body.position

        push()
        translate(pos.x, pos.y)

        fill(0, 0, 255)
        ellipseMode(RADIUS)
        ellipse(0, 0, 3)
        
        pop()
    }
}