var Heist = Heist || {};
// Main menu state goes here.
// var game = new Phaser.Game(1000, 600, Phaser.AUTO, '' );

Heist.MainMenu = function (game) {
};


var startButton;
this.back;
this.mummy;
this.anim;
this.loopText;

Heist.MainMenu.prototype = {

  create: function () {
        var background = this.add.tileSprite(0, 0, 1920, 1920, 'levelOneBackground');
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();
        startButton = this.add.sprite(650, 400, 'button') // , this.startGame(), this, 1, 0, 2);
        startButton.inputEnabled = true;
        startButton.input.pixelPerfectClick = true;
        startButton.events.onInputDown.add(this.clicked, this);
        startButton.anchor.setTo(0.5, 0.5);

        tutButton = this.add.sprite(400, 400, 'button-02') // , this.startGame(), this, 1, 0, 2);
        tutButton.inputEnabled = true;
        tutButton.input.pixelPerfectClick = true;
        tutButton.events.onInputDown.add(this.clicked, this);
        tutButton.anchor.setTo(0.5, 0.5);


        // this.back = this.add.image(0, -400, 'lazur');
        // this.back.scale.set(2);
        // this.back.smoothed = false;

        this.mummy = this.add.sprite(100, 100, 'mummy', 4000);
        this.mummy.scale.set(2);
        this.mummy.smoothed = true;
        this.anim = this.mummy.animations.add('walk');

        // // this.anim.onStart.add(this.animationStarted(), this);
        // // this.anim.onLoop.add(this.animationLooped(), this);
        // // this.anim.onComplete.add(this.animationStopped(), this);
        //
        this.anim.play(5, true);

      },

      clicked: function (pointer) {
        console.log("I am being called");
        this.state.add('LevelOneSummary', Heist.LevelOneSummary)
        this.state.add('LevelOne', Heist.LevelOne)
        this.state.start('LevelOne')
        Heist.playerLives = 3;
      },

    };


      // this.state.add('Boot', mainMenu.Boot);
      // game.state.start('Boot');
