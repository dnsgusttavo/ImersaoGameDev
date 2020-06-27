class Game{
    constructor(){
        this.currentEnemy = 0;
    }

    setup(){
        scene = new Scene(backgroundImage,3);
        character = new Character(matrixCharacter, characterImage, 0, 30, 110, 145, 220, 270)
        //(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite
        const enemy = new Enemy(matrixEnemy, enemyImage, width, 30, 52, 52, 104, 104, 10, 100)
        const bigEnemy = new Enemy(matrixBigEnemy, bigEnemyImage, width - 400, 25, 200, 170, 400, 340, 10, 100)
        const enemyFlying = new Enemy(matrixEnemyFlying, enemyFlyingImage, width, 200, 100, 75, 200, 150, 10, 100)
        score = new Score();
        enemies.push(enemy);
        enemies.push(bigEnemy);
        enemies.push(enemyFlying);

        if(key === " "){
            //Reproduce sound only jump
            if(character.jump()){
                jumpSound.play()
            }
          }
    }

    keyPressed(key,jumpSound){
        if(key === " "){
            //Reproduce sound only jump
            if(character.jump()){
                jumpSound.play()
            }
          }
    }

    draw(){
        scene.show();
  scene.move();
  character.show();
  character.setGravity();
  score.show();
  score.add();
  
  const enemy = enemies[this.currentEnemy];
  const enemyIsVisible = enemy.x  < - enemy.widthChar;

  
  if(enemyIsVisible){
    this.currentEnemy++;
    if(this.currentEnemy > 2){
        this.currentEnemy = 0;
    }

    enemy.speed = parseInt(random(10,30));
  }
  enemy.show();
  enemy.move();

  if(character.isColliding(enemy,false)){
    // filter(BLUR, 3) 
    image(gameOverImage, width/2 - 200, height/2 - 50);
    score.show();
    gameOverSound.play();
    noLoop();
  }
//  Game IA Bot is disabled
  // if(character.willCollide(enemy, false)){
  //    console.log("[GAME IA] Collision object detected!")
  //   if(character.jump()) jumpSound.play()
  // }
    }
}