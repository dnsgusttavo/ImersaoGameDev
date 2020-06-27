class Game{
    constructor(){
        this.index = 0;
        this.map = configs.map;
    }

    setup(){
        scene = new Scene(backgroundImage,3);
        character = new Character(matrixCharacter, characterImage, 20, 30, 110, 145, 220, 270)
        //(matrix, img, x, widthChar, heightChar, widthSprite, heightSprite
        const enemy = new Enemy(matrixEnemy, enemyImage, width, 30, 52, 52, 104, 104, 10)
        const bigEnemy = new Enemy(matrixBigEnemy, bigEnemyImage, width - 400, 25, 200, 170, 400, 340, 10)
        const enemyFlying = new Enemy(matrixEnemyFlying, enemyFlyingImage, width, 200, 100, 75, 200, 150, 10)
        score = new Score();
        life = new Life(configs.configs.maxLife, configs.configs.startLife);
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
        if(key === " " || key == "ArrowUp" || key == 'w'){
            //Reproduce sound only jump
            if(character.jump()){
                jumpSound.play()
            }
          }
    }

    draw(){
      if(keyIsDown(65) || keyIsDown(LEFT_ARROW)){
        character.walkLeft();
      }
      if(keyIsDown(68) || keyIsDown(RIGHT_ARROW)){
        character.walkRight();
      }

      scene.show();
      scene.move();
      life.draw();
      character.show();
      character.setGravity(); 
      score.show();
      score.add();
      
  
  const currentLine = this.map[this.index];
  const enemy = enemies[currentLine.enemy];
  const enemyIsVisible = enemy.x  < - enemy.widthChar;
  enemy.speed = currentLine.speed;
  
  if(enemyIsVisible){
    this.index++;
    enemy.spawn();
    if(this.index > this.map.length - 1){
        this.index = 0;
    }

  }
  enemy.show();
  enemy.move();
  
  if(character.isColliding(enemy,false)){
    life.removeLife();
    character.invincibleMode();

    if(life.lifes === 0){
      image(gameOverImage, width/2 - 200, height/2 - 50);
      gameOverSound.play();
      noLoop();
    }

  }
  //  Game IA Bot is disabled
  // if(character.willCollide(enemy, false)){
  //    console.log("[GAME IA] Collision object detected!")
  //     if(character.jump())
  //       jumpSound.play()
  //     character.walkRight();
  //   }
  }  
}