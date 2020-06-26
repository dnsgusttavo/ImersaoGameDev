class Score{
    constructor(){
        this.score = 0;
    }

    show(){
        stroke('#000');
        strokeWeight(4);
        textAlign(RIGHT);
        fill('#FFC500')
        textStyle(BOLD);
        textSize(50);
        text(parseInt(this.score), width -50, 50)
    }

    add(){
        this.score += 0.1 ;
    }
}