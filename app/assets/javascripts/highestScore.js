var Heist = Heist || {};

Heist.HighestScore = function (game) {
};


var startButton;
Heist.HighestScore.prototype = {

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

    var livesLeft = this.add.text(100, 127, '', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    livesLeft.fixedToCamera = true;
    livesLeft.text = "You have " + Heist.playerLives + " lives left"


    var ded = this.add.text(100, 97, 'You lost a life', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    ded.fixedToCamera = true;


      },

      clicked: function (pointer) {
        this.state.add('LevelOne', Heist.LevelOne)
        this.state.start('LevelOne')
        Heist.levelScore = 0;
        this.timer.restart();

      }

    };


      // this.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
