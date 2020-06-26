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
const matrixCharacter = [
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


function preload(){
    backgroundImage = loadImage('./imagens/cenario/floresta.png');
    characterImage = loadImage('./imagens/personagem/correndo.png');
    backgroundMusic = loadSound('./sons/trilha_jogo.mp3');
    enemyImage = loadImage('./imagens/inimigos/gotinha.png')
}

function keyPressed(){
  console.log(key)
    if(key === " ")
      character.jump();
    if(key == "-" && backgroundMusic.output.gain.value > 0.05)
      backgroundMusic.output.gain.value -= 0.05
    if(key == "+" && backgroundMusic.output.gain.value < 1)
      backgroundMusic.output.gain.value += 0.05
    if(key == "m")
      (backgroundMusic.output.gain.value == 0) ? backgroundMusic.output.gain.value = 1 : backgroundMusic.output.gain.value = 0;
    
}

function setup() {
  //Create canvas
  createCanvas(windowWidth, windowHeight);

  scene = new Scene(backgroundImage,3);
  character = new Character(matrixCharacter, characterImage, 0, 220, 270, 220, 270)
  //(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite
  enemy = new Enemy(matrixEnemy, enemyImage, width - 52, 52, 52, 104, 104)
  
  backgroundMusic.loop();
  backgroundMusic.output.gain.value = 0.01;
  frameRate(40);
}

function draw() {
  scene.show();
  scene.move();
  character.show();
  character.setGravity();
  enemy.show();
  enemy.move();

  if(character.isColliding(enemy,true)){
    console.log("Bateu")
    character.jump();
  }
}

