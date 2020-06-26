class Enemy extends Animate{
    constructor(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite){
        super(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite);
        this.speed = 10;
    }

    move(){
        this.x = this.x - this.speed;

        if(this.x < -this.widthChar)
            this.x = width;
    }
}