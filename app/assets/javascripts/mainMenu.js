var Heist = Heist || {};
// Main menu state goes here.
// var game = new Phaser.Game(1000, 600, Phaser.AUTO, '' );
Heist.MainMenu = function (game) {

<<<<<<< HEAD
var mainMenu = function( ) {};

mainMenu.Boot = function(  ) {};

mainMenu.Boot.prototype = {
  preload: function() {

        game.load.image('menu', 'assets/phaser_background-02.png');
        game.load.spritesheet('button', 'assets/number-buttons-90x90.png', 90, 90);

    },

    var button;
    var background;

      create: function () {

        button = game.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 1, 0, 2);
        button.anchor.setTo(0.5, 0.5);
=======
};

var startButton;
Heist.MainMenu.prototype = {

  create: function () {
        var background = this.add.tileSprite(0, 0, 1920, 1920, 'background');
        startButton = this.add.sprite(480, 300, 'button') // , this.startGame(), this, 1, 0, 2);
        startButton.inputEnabled = true;
        startButton.input.pixelPerfectClick = true;
        startButton.events.onInputDown.add(this.clicked, this);
        startButton.anchor.setTo(0.5, 0.5);
>>>>>>> 322c3702a635fc09c0e0c3f4eaddac773fbf4b66

      },

      clicked: function (pointer) {
        console.log("I am being called");
        this.state.start('LevelOne')
      }


    };

      // game.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
