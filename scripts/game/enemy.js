class Enemy extends Animate{
    constructor(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite, speed){
        super(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite);
        this.speed = speed;
        this.x = width
    }

    move(){
        this.x = this.x - this.speed;
    }

    spawn(){
        this.x = width;
    }
}