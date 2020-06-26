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
        if(this. y > this.heightChar)
            this.jumpSpeed = -30
    }

    setGravity(){
        this. y += this.jumpSpeed;
        this.jumpSpeed += +this.gravity;

        if(this.y > this.yBase)
            this.y = this.yBase
    }

    isColliding(enemy, debugMode = false){

        if(debugMode){
            noFill();
            stroke('red');
            strokeWeight(4);
            rect(this.x, this.y, this.widthChar, this.heightChar);
            rect(enemy.x, enemy.y, enemy.widthChar, enemy.heightChar)
        }
        
         return collideRectRect(this.x, this.y, this.widthChar, this.heightChar,enemy.x, enemy.y, enemy.widthChar, enemy.heightChar)
    }
}
