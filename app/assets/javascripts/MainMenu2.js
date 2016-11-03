var Heist = Heist || {};
// Main menu state goes here.
// var game = new Phaser.Game(1000, 600, Phaser.AUTO, '' );
Heist.MainMenu2 = function (game) {
};


var startButton;
this.mummy;
this.copCar;
this.anim;

Heist.MainMenu2.prototype = {

  create: function () {
        var background = this.add.tileSprite(0, 0, 1920, 1920, 'levelTwoBackground');
        startButton = this.add.sprite(600, 400, 'button') // , this.startGame(), this, 1, 0, 2);
        startButton.inputEnabled = true;
        startButton.input.pixelPerfectClick = true;
        startButton.events.onInputDown.add(this.clicked, this);
        startButton.anchor.setTo(0.5, 0.5);


      },

      clicked: function (pointer) {
        console.log("I am being called");
        this.state.start('LevelTwo')
      }

    };

      // game.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
