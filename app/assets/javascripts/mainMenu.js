// Main menu state goes here.
var game = new Phaser.Game(1000, 600, Phaser.AUTO, '' );

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

      },

      render: function () {
        button.setFrames(4, 3, 5);
      }

    };

      game.state.add('Boot', mainMenu.Boot);
      game.state.start('Boot');
