class StartScreen{
    constructor(){

    }

    draw(){
        this._backgroundImage();
        this._text();
        this._button();
    }

    _backgroundImage(){
        image(startScreenImage, 0, 0, width, height);
    }

    _text(){
        textFont(startScreenFont);
        textAlign(CENTER)
        textSize(90);
        text('Hipsta The Game', width/ 2, height/5);
    }

    _button(){
        buttonManager.y = height/ 7 * 5;
        buttonManager.draw();
    }
}