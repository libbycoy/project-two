// Main menu state goes here.
// var game = new Phaser.Game(1000, 600, Phaser.AUTO, '' );
Heist.MainMenu = function (game) {

};

Heist.MainMenu.prototype = {

  create: function () {
        var background = this.add.tilSprite(0, 0, 1920, 1920, 'background');
        var button = this.add.button(game.world.centerX, game.world.centerY, 'button', actionOnClick, this, 1, 0, 2);
        button.anchor.setTo(0.5, 0.5);




      },

      render: function () {
        button.setFrames(4, 3, 5);
      }

    };

      game.state.add('Boot', mainMenu.Boot);
      game.state.start('Boot');
