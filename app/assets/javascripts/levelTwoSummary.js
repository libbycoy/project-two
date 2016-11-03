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

    var gameEndMessage = this.add.text(100, 300, '$0', { font: '35px Nothing You Could Do', fill: '#00FFFF' });
    gameEndMessage.fixedToCamera = true;
    gameEndMessage.text = "\"Congratulations. You redistributed all the wealth.\""

    var levelScoreSummary = this.add.text(100, 400, '$0', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    levelScoreSummary.fixedToCamera = true;
    levelScoreSummary.text = "You got $" + Heist.levelScore + " this level"

    var totalScoreSummary = this.add.text(100, 440, '$0', { font: '50px Nothing You Could Do', fill: '#00FFFF' });
    totalScoreSummary.fixedToCamera = true;
    totalScoreSummary.text = "The Final take: $" + Heist.totalScore;

    var livesLeft = this.add.text(100, 490, '', { font: '25px Nothing You Could Do', fill: '#00FFFF' });
    livesLeft.fixedToCamera = true;
    livesLeft.text = "You finished with " + Heist.playerLives + this.lifeOrLives(Heist.playerLives) + " left"


      },

      clicked: function (pointer) {
        this.state.start('MainMenu')
        this.state.add('MainMenu', Heist.MainMenu)
      },

      lifeOrLives: function(num) {
        if (num === 1){
          return " life"
        } else {
          return " lives"
        }
      }

      //TODO Make AJAX call to pass

      //route
      //action
      //Ajax call

    };


      // this.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
