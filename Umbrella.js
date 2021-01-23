class Umbrella{
    constructor(x, y){
        var options = {
            isStatic: true
        }

        this.body = Matter.Bodies.circle(x, y, 20, options)


        this.image1 = loadImage("images/Walking Frame/walking_1.png")
        this.image2 = loadImage("images/Walking Frame/walking_2.png")
        this.image3 = loadImage("images/Walking Frame/walking_3.png")
        this.image4 = loadImage("images/Walking Frame/walking_4.png")
        this.image5 = loadImage("images/Walking Frame/walking_5.png")
        this.image6 = loadImage("images/Walking Frame/walking_6.png")
        this.image7 = loadImage("images/Walking Frame/walking_7.png")
        this.image8 = loadImage("images/Walking Frame/walking_8.png")

        this.animation = loadAnimation(this.image1, this.image2, this.image3, this.image4, this.image5, this.image6, this.image7, this.image8)

    }

    display(){
        var pos = this.body.position

        fill(255, 0, 0)
        ellipseMode(RADIUS)
        ellipse(pos.x, pos.y, 20)

        animation(this.animation, pos.x, pos.y, 2.5, 2.503125)



    }
}