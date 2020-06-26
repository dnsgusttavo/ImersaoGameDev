class Enemy extends Animate{
    constructor(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite, speed, delay){
        super(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite);
        this.speed = speed;
        this.delay = delay;
        this.x = width + this.delay
    }

    move(){
        this.x = this.x - this.speed;

        if(this.x < -this.widthChar - this.delay)
            this.x = width;
    }
}