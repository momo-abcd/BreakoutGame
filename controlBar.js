export class ControlBar{
    constructor(ctx){
        this.ctx = ctx;
        this.x=175;
        this.leftPressed = false;
        this.rightPressed = false;
    }

    draw(){
        this.ctx.fillStyle = '#099EE2';
        this.ctx.fillRect(this.x,480,150,20);
        if(this.leftPressed){
            if(this.x > 0)
                this.x -= 5;
        } else if(this.rightPressed){
            if(this.x < 350)
                this.x += 5;
        }
    }

    keyDownHandler(e){
        if(e.key == "ArrowRight"){
            this.rightPressed = true;
        }else if(e.key == "ArrowLeft"){
            this.leftPressed = true;
        }
    }
    keyUpHandler(e){
        if(e.key == "ArrowRight"){
            this.rightPressed = false;
        }else if(e.key == "ArrowLeft"){
            this.leftPressed = false;
        }
    }
}