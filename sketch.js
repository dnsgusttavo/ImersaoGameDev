let backgroundImage;
let characterImage;
let enemyImage;

let scene;
let backgroundMusic;
let character;
let enemy;

const matrixEnemy = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]


function preload(){
    backgroundImage = loadImage('./imagens/cenario/floresta.png');
    characterImage = loadImage('./imagens/personagem/correndo.png');
    backgroundMusic = loadSound('./sons/trilha_jogo.mp3');
    enemyImage = loadImage('./imagens/inimigos/gotinha.png')
}

function setup() {
  //Create canvas
  createCanvas(windowWidth, windowHeight);

  scene = new Scene(backgroundImage,3);
  character = new Character(characterImage)
  //(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite
  enemy = new Enemy(matrixEnemy, enemyImage, width - 52, 52, 52, 104, 104)

  // backgroundMusic.loop();
  frameRate(40);
}

function draw() {
  scene.show();
  scene.move();
  character.show();
  enemy.show();
  enemy.move();
}

