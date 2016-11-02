var Heist = Heist || {};

Heist.LevelOneSummary = function (game) {
};


var startButton;
Heist.LevelOneSummary.prototype = {

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


    var levelScoreSummary = this.add.text(100, 97, '$0', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    levelScoreSummary.fixedToCamera = true;
    levelScoreSummary.text = "You got $" + Heist.levelScore + " this level"


    var totalScoreSummary = this.add.text(100, 67, '$0', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    totalScoreSummary.fixedToCamera = true;
    totalScoreSummary.text = "This run: $" + Heist.totalScore;


      },

      clicked: function (pointer) {

        this.state.start('LevelTwo')
        this.state.add('LevelTwoSummary', Heist.LevelTwoSummary)
        Heist.levelScore = 0;

      }

    };


      // this.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
