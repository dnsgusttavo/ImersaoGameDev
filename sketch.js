let backgroundImage;
let characterImage;
let enemyImage;
let bigEnemyImage;
let jumpSound;
let scene;
let backgroundMusic;
let character;
let enemy;
let bigEnemy;



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

const matrixBigEnemy = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
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
    jumpSound = loadSound('./sons/somPulo.mp3')
    enemyImage = loadImage('./imagens/inimigos/gotinha.png')
    bigEnemyImage = loadImage('./imagens/inimigos/troll.png')
}

function keyPressed(){
    if(key === " "){
      //Reproduce sound only jump
      if(character.jump()){
          jumpSound.play()
      }
    }
      
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
  character = new Character(matrixCharacter, characterImage, 0, 30, 110, 145, 220, 270)
  //(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite
  enemy = new Enemy(matrixEnemy, enemyImage, width, 30, 52, 52, 104, 104, 10, 100)
  bigEnemy = new Enemy(matrixBigEnemy, bigEnemyImage, width - 400, 25, 200, 170, 400, 340, 10, 500)
  
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
  bigEnemy.show();
  bigEnemy.move();
  

  if(character.isColliding(enemy,true) || character.isColliding(bigEnemy,true)){
    console.log("Bateu")
    
    // noLoop();
  }

  if(character.willCollide(enemy) || character.willCollide(bigEnemy)){
    console.log("Vai bater")
    
      if(character.jump()){
        jumpSound.play()
      }

  }
}