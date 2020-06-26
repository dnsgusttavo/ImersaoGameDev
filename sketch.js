let backgroundImage;
let characterImage;
let scene;
let backgroundMusic;
let character;

function preload(){
    backgroundImage = loadImage('./imagens/cenario/floresta.png');
    characterImage = loadImage('./imagens/personagem/correndo.png');
    backgroundMusic = loadSound('./sons/trilha_jogo.mp3');
}

function setup() {
  //Create canvas
  createCanvas(windowWidth, windowHeight);

  //Create scene
  scene = new Scene(backgroundImage,3);
  backgroundMusic.loop();

  character = new Character(characterImage)
  frameRate(40);
}

function draw() {
  scene.show();
  scene.move();
  character.show();
}

