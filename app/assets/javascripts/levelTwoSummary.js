var Heist = Heist || {};

Heist.LevelTwoSummary = function (game) {
};


var startButton;
Heist.LevelTwoSummary.prototype = {

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

    var scoreSummary = this.add.text(100, 67, '$0', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    scoreSummary.fixedToCamera = true;
    scoreSummary.text = "Total take, $" + Heist.totalScore;


      },

      clicked: function (pointer) {

        this.state.start('LevelThree')
      }

    };


      // this.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
