class Character{
    constructor(img){
        this.img = img;
        this.matrix = [
            [0, 0],
            [220, 0],
            [440, 0],
            [660, 0],
            [0, 270],
            [220, 270],
            [440, 270],
            [660, 270],
            [0, 540],
            [220, 540],
            [440, 540],
            [660, 540],
            [0, 810],
            [220, 810],
            [440, 810],
            [660, 810]
        ]
        this.currentFrame = 1;
    }

    show(){
        //image(var, screenX, screenY, imageW, ImSageH, imageX, ImageY, showW, showH)
        image(this.img, 0, height - 270, 220, 270, this.matrix[this.currentFrame][0], this.matrix[this.currentFrame][1], 220, 270)
        this.animate();
    }

    animate(){
        this.currentFrame++;

        if(this.currentFrame >= this.matrix.length - 1)
            this.currentFrame = 0;
    }

}
