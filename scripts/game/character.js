class Character extends Animate{
    constructor(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite){
        super(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite);
        
        this.yBase = height - heightChar;
        this.y = this.yBase;
        this.currentFrame = 1;
        this.jumpSpeed = 0;
        this.gravity = 3;
        this.jumps = 0;
        this.jumpLimit = 2;
    }

    jump(){
        //Verify if character is on floor
        if(this.y == this.yBase){
            this.jumps = 0;
        }

        //Verify jump amount
        if(this.jumps < this.jumpLimit){
            this.jumpSpeed = -35;
            this.jumps += 1;
            return true;
        }
        
    }

    setGravity(){
        this. y += this.jumpSpeed;
        this.jumpSpeed += +this.gravity;

        if(this.y > this.yBase)
            this.y = this.yBase

    }

    isColliding(enemy, debugMode = false){
        const precision = .81; 
        if(debugMode){
            noFill();
            stroke('red');
            strokeWeight(4);
            rect(this.x, this.y, this.widthChar, this.heightChar);
            rect(enemy.x, enemy.y, enemy.widthChar, enemy.heightChar)
        }
         return collideRectRect(this.x,
                                this.y,
                                this.widthChar * precision,
                                this.heightChar * precision,
                                enemy.x,
                                enemy.y, 
                                enemy.widthChar * precision, 
                                enemy.heightChar * precision)
            
    }
}
