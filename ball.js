export class Ball {
    constructor(ctx){
        this.speed = 3;
        this.radius = 10;
        this.ctx = ctx;
        this.x = Math.floor(Math.random()*((500-this.radius) - this.radius) + this.radius);
        this.y = Math.floor(Math.random()*((500-this.radius) - this.radius) + this.radius);
        this.vx = this.speed;
        this.vy = -this.speed;
    }

    draw(){
        this.x += this.vx;
        this.y += this.vy;
        this.bounceBall();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        this.ctx.fillStyle = "red";  //채울 색상
        this.ctx.fill(); //채우기
    }
    bounceBall(){
        if((this.x-this.radius) == 0){
           this.vx = -this.vx;
        }
        if((this.x+this.radius) == 500) {
            this.vx = -this.vx;
        }
        if(this.y - this.radius == 0){
            this.vy = -this.vy;
            console.log(this.y);
        }
        if(this.y + this.radius == 500){
            this.vy = -this.vy;
        }
    }
}