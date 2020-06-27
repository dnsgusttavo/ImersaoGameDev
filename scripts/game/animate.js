class Animate{
    constructor(matrix, img, x, charY, widthChar, heightChar, widthSprite, heightSprite){
        this.matrix = matrix;
        this.img = img;
        this.x = x;
        this.charY = charY;
        this.widthChar = widthChar;
        this.heightChar = heightChar;
        this.y = height - heightChar - charY;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
        this.currentFrame = 0;
    }

    show(){
        image(this.img, this.x, this.y, this.widthChar, this.heightChar, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], this.widthSprite, this.heightSprite)
        this.animate();
    }

    animate(){
        this.currentFrame++;

        if(this.currentFrame >= this.matrix.length - 1)
            this.currentFrame = 0;
    }

   
}
