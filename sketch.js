
function keyPressed(){

  game.keyPressed(key,jumpSound)
    if(key == "r"){
      window.location.href = window.location.href
    }
    if(key == "-" && backgroundMusic.output.gain.value > 0.05)
      backgroundMusic.output.gain.value -= 0.05
    if(key == "+" && backgroundMusic.output.gain.value < 1)
      backgroundMusic.output.gain.value += 0.05
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
  backgroundMusic.output.gain.value = 0.01;
  frameRate(40);

  masterVolume(0);
}

function draw() {

  scenes[currentScene].draw();
}