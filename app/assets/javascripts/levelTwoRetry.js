var Heist = Heist || {};

Heist.LevelTwoRetry = function (game) {
};


var startButton;
Heist.LevelTwoRetry.prototype = {

  create: function () {
    // Align canvas to middle.
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();

    var background = this.add.tileSprite(0, 0, 1920, 1920, 'levelTwoBackground');
    startButton = this.add.sprite(600, 400, 'button') // , this.startGame(), this, 1, 0, 2);
    startButton.inputEnabled = true;
    startButton.input.pixelPerfectClick = true;
    startButton.events.onInputDown.add(this.clicked, this);
    startButton.anchor.setTo(0.5, 0.5);

    var livesLeft = this.add.text(100, 475, '', { font: '37px Alegreya Sans SC', fill: '#FFFFFF' });
    livesLeft.fixedToCamera = true;
    livesLeft.text = "You have " + Heist.playerLives + this.lifeOrLives(Heist.playerLives) + " left"


    var ded = this.add.text(100, 435, 'You lost a life', { font: '37px Alegreya Sans SC', fill: '#FFFFFF' });
    ded.fixedToCamera = true;


      },

      clicked: function (pointer) {
        Heist.health = 80;
        Heist.levelScore = 0;
        this.state.add('LevelTwo', Heist.LevelTwo)
        this.state.start('LevelTwo')
        this.timer.restart();
      },

      lifeOrLives: function(num) {
        if (num === 1){
          return " life"
        } else {
          return " lives"
        }
      }

    };
