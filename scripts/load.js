function preload(){
    gameOverImage = loadImage('./imagens/assets/game-over.png')
    backgroundImage = loadImage('./imagens/cenario/floresta.png');
    characterImage = loadImage('./imagens/personagem/correndo.png');
    backgroundMusic = loadSound('./sons/trilha_jogo.mp3');
    jumpSound = loadSound('./sons/somPulo.mp3')
    enemyImage = loadImage('./imagens/inimigos/gotinha.png')
    enemyFlyingImage = loadImage('./imagens/inimigos/gotinha-voadora.png');
    bigEnemyImage = loadImage('./imagens/inimigos/troll.png')
    gameOverSound = loadSound('./sons/game_over.mp3');
    startScreenImage = loadImage('./imagens/cenario/telainicial.png');
    startScreenFont = loadFont('./imagens/assets/fonteTelaInicial.otf');
}