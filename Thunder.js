class Thunder{
    constructor(){

        var options = {
            isStatic: true
        }

        this.animation1 = loadImage("images/thunderbolt/1.png")
        this.animation2 = loadImage("images/thunderbolt/2.png")
        this.animation3 = loadImage("images/thunderbolt/3.png")
        this.animation4 = loadImage("images/thunderbolt/4.png")
        this.animation = this.animation1

    }

    display(){
        var rand = Math.round(random(1, 4))

        if(frameCount % 80 == 0){

            switch(rand){
                case 1: 
                this.animation = this.animation1
                break;
                case 2:
                this.animation = this.animation2
                break;
                case 3:
                this.animation = this.animation3;
                break;
                case 4:
                this.animation = this.animation4;
                break;
                default:
                break;
            }

            
            image(this.animation, random(0, 100), 0)

        }
        

        
    }
}