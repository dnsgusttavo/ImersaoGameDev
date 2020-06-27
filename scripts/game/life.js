class Life{
    constructor(total, start){
        this.total = total;
        this.start = start;
        this.lifes = this.start;
        this.width = 25;
        this.height = 25;
        this.xStart = 20;
        this.y = 20;
    }

    draw(){
        for(let i=0; i < this.lifes; i++){
            const margin = i * 10;
            const posit = this.xStart * (i + 1)
            image(lifeImage, posit + margin, this.y, this.width, this.height)
        }
    }

    addLife(){
        if(this.lifes <= this.total){
            this.lifes++;
        }
    }

    removeLife(){
        this.lifes--;
    }
}