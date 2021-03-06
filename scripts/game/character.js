class Character extends Animate{
    constructor(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite){
        super(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite);
        this.x = x;
        this.charY = charY;
        this.yBase = height - heightChar - charY;
        this.y = this.yBase;
        this.currentFrame = 1;
        this.jumpSpeed = 0;
        this.gravity = 3;
        this.jumps = 0;
        this.jumpLimit = 2;
        this.jumpHeight = -35
        this.walkSpeed = 15;
        this.invincible = false;
    }

    jump(){
        //Verify if character is on floor
        if(this.y == this.yBase){
            this.jumps = 0;
        }

        //Verify jump amount
        if(this.jumps < this.jumpLimit){
            this.jumpSpeed = this.jumpHeight;
            this.jumps += 1;
            return true;
        }
        
    }

    walkLeft(){
        this.x -= this.walkSpeed;
    }

    walkRight(){
        this.x += this.walkSpeed;
    }
    setGravity(){
        this.y += this.jumpSpeed;
        this.jumpSpeed += this.gravity;
        this.x -= this.walkSpeed *0.2;

        if(this.y > this.yBase)
            this.y = this.yBase
        
        this.x = constrain(this.x, 0, width - this.widthChar);

    }

    //Function to verify if character will colide
    willCollide(enemy, debugMode = false){

        const precisionChar = 1.5
        const precisionEnemy = 1
        const charX2 = this.x + this.widthChar * 0.5;
        const charY2 = this.y + this.heightChar *0.5;
        const charDiameter = this.widthChar * precisionChar;
        const enemyX2 = enemy.x + enemy.widthChar * 0.5;
        const enemyY2 = enemy.y + enemy.heightChar *0.5;
        const enemyDiameter = enemy.widthChar * precisionEnemy;

        if(debugMode){
            this.jumpLimit = 9999;
            noFill();
            stroke('blue');
            strokeWeight(4);
            circle(charX2, charY2, charDiameter)
            circle(enemyX2, enemyY2, enemyDiameter)
        }
        return collideCircleCircle(charX2, charY2, charDiameter, enemyX2, enemyY2, enemyDiameter) 
    }

    invincibleMode(){
        this.invincible = true;
        setTimeout(() => {
            this.invincible = false;
        }, 1000);
    }

    isColliding(enemy, debugMode = false){

        if(this.invincible){
            return false;
        }

        const precision = 0.7
        const charX2 = this.x + this.widthChar * 0.5;
        const charY2 = this.y + this.heightChar *0.5;
        const charDiameter = this.widthChar * precision;
        const enemyX2 = enemy.x + enemy.widthChar * 0.5;
        const enemyY2 = enemy.y + enemy.heightChar *0.5;
        const enemyDiameter = enemy.widthChar * precision;

        if(debugMode){
            noFill();
            stroke('red');
            strokeWeight(4);
            rect(this.x, this.y, this.widthChar, this.heightChar);
            rect(enemy.x, enemy.y, enemy.widthChar, enemy.heightChar)
            stroke('yellow');
            strokeWeight(4);
            circle(charX2, charY2, charDiameter)
            circle(enemyX2, enemyY2, enemyDiameter)   
        }

         return collideCircleCircle(charX2, charY2, charDiameter, enemyX2, enemyY2, enemyDiameter)
            
    }
}
