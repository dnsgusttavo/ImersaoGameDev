
function keyPressed(){
  game.keyPressed(key,jumpSound)
    if(key == "r"){
      window.location.href = window.location.href
    }
    if(key == "-" && masterVolume().value > 0.2)
      masterVolume(masterVolume().value - 0.1)
    if(key == "+" && masterVolume().value < 1)
      masterVolume(masterVolume().value + 0.1)
    if(key == "m")
      (masterVolume().value) ? masterVolume(0) : masterVolume(1);
    
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  game = new Game();
  startScreen = new StartScreen();
  game.setup();
  scenes = {
    game,
    startScreen,
  };
  buttonManager = new ButtonManager('START', width/2, height/2);

  backgroundMusic.loop();
  frameRate(40);
  masterVolume(1);
}

function draw() {

  scenes[currentScene].draw();
}