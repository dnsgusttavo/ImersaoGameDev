class Character extends Animate{
    constructor(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite){
        super(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite);
        
        this.yBase = height - heightChar;
        this.y = this.yBase;
        this.currentFrame = 1;
        this.jumpSpeed = 0;
        this.gravity = 3;
    }

    jump(){
        this.jumpSpeed = -30 
    }

    setGravity(){
        this. y += this.jumpSpeed;
        this.jumpSpeed += +this.gravity;

        if(this.y > this.yBase)
            this.y = this.yBase
    }
}
