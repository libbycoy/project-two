var Heist = Heist || {};

Heist.LevelOne = function(game) {
  this.player;
  this.totalLives;
  this.platforms;
  this.cursors
  this.x;
  this.stars;
  this.diamonds;
  this.extractLocation;
  this.score = 0;
  this.totalScore = 0;
  this.scoreText;
  this.promptText;
  this.style1 = { font: '30px Arial', fill: '#00FFFF' };
  this.style2 = { font: '22px Arial', fill: '#00FFFF', align: 'centerY' };
  this.opaqimg;
  this.timer;
  this.timerEvent;
  this.text;
  this.maxPossibleScore;
  this.badguy;
  this.outerWall;
  this.outerwalls;

};

Heist.LevelOne.prototype = {
  create: function () {

    //centralises the game on the browser page
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();


      // // Create a custom timer
      // this.timer = this.time.create();
      //
      // // Create a delay countdown timer, given params.
      // this.timerEvent = this.timer.add(Phaser.Timer.MINUTE * 5 + Phaser.Timer.SECOND * 0, this.endTimer, this);
      //
      // // Start the timer!
      // this.timer.start();

      //  We're going to be using physics, so enable the Arcade Physics system
      this.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      this.add.tileSprite(0, 0, 1920, 1920, 'background');
      this.world.setBounds(0, 0, 1920, 1920);

      //  The platforms group contains the walls to contain the sprite
      platforms = this.add.group();

      opaqimg = this.add.sprite(1000, 600, 'opacity');
      opaqimg.fixedToCamera = true;
      opaqimg.cameraOffset.setTo(0, 0);

      keyimg = this.add.sprite(150, 95, 'key');
      keyimg.fixedToCamera = true;
      keyimg.cameraOffset.setTo(20, 20);

      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;

      // Game walls in via a loop function
      this.outerWall = this.game.add.group();
      this.outerWall.enableBody = true;
      this.innerWall = this.game.add.group();
      this.innerWall.enableBody = true;

      var level = [
          'x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x x',
          '                                                                                     ',
          'x        o       o                                                                  x',
          '         o                                                                           ',
          'x        o                                                                          x',
          '         o                                                                           ',
          'x        o                                        oooooo    oooooooooooooo          x',
          '         o       o                                o                                  ',
          'x        o       o                                o                                 x',
          '                 o                                o                                  ',
          'x                o                                o                                 x',
          '                 o                                o                                  ',
          'x                o                                o                                 x',
          '         oooooooooo    oooooooooooooooooo    oooooo              oooooooooooooo    o ',
          'x        o                                        o                         o       x',
          '         o                                        o                         o        ',
          'x        o                                        o                         o       x',
          '         o                                        o                         o        ',
          'x        o       o                                ooooooo    ooooooooo      o       x',
          '         o       o                                o           o             o        ',
          'x oo    oo       o                                o           o             o       x',
          '         o       o      oooooooooooooooooooo    ooo           o             o        ',
          'x        o       o      o     o                   o                         o       x',
          '         o       o      o     o                   o                         ooo    o ',
          'x        o              o     o                   o                                 x',
          '         o              o     o                   o                                  ',
          'x        o              o     o        o          o           o                     x',
          '         o              o              o          o           o                      ',
          'x                o      o              o          o           o                     x',
          '                 o      o              o          o           o                      ',
          'x                o      o              o          o           o                     x',
          '                 o      o     o        o          o           o                      ',
          'x        o       o      o     o        o          o           o                     x',
          '         o       o      o     o        o          o           o                      ',
          'x        o       o      ooooooo        oooooooooooo           o                     x',
          '         o       o            o                               o                      ',
          'x        o       o            o                               o                     x',
          '         o       o            o                               o                      ',
          'x        o       o            o                                                     x',
          '  oooooooooooooooo            o                                                      ',
          'x                             o                                                     x',
          '                              o                                           ooo    ooo ',
          'x                             o                               o           o         x',
          '                              o                               o           o          ',
          'x oooooo    oooooo            o                               o           o         x',
          '                 o                                            o           o          ',
          'x                o                                            o           o         x',
          '                 o                                            o                      ',
          'x                o                                            o                     x',
          '                 o            o                               o                      ',
          'x                o            o                               o                     x',
          '                 o            o                               o           o          ',
          'x                o            o                               o           o         x',
          '                 o            ooooooooooooooooooooooooooooooooo           o          ',
          'x                o                                                        o         x',
          '                 o                                                        o          ',
          'x                o                                                        o         x',
          '                                                                          o          ',
          'x oooooooo                                                                o         x',
          '         o                                                                o          ',
          'x        o                                                                o         x',
          '         o       o                                                        o          ',
          'x        o       o                                                        o         x',
          '         o       o                                                        o          ',
          'x        o       o                                                        o         x',
          '         o       o                                                        o          ',
          'x        o       oooooooooooooooo                                         o         x',
          '         o       o                                         oooooooooooooooo          ',
          'x        o       o                                         o              o         x',
          '                 o                                         o              o          ',
          'x                o                                         o              o         x',
          '                 o                                         o                         ',
          'x                o                                         o                        x',
          '         o       o                                         o                         ',
          'x        o       o                                                                  x',
          '         o       o                                                        o          ',
          'x        o       o                                                        o         x',
          '         o       o                                                        o          ',
          'x x x x x x x x x x x x x x x x x x x x         x x x x x x x x x x x x x x x x x x x',
          '                                                                                     ',
          '                                      x         x,                                   ',
          '                                                                                     ',
          '                                      x         x,                                   '
      ];
        // Create the level by going through the array
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                // Create exterior bank walls and add the to the 'walls' group
                if (level[i][j] == 'x') {
                    var wall = this.outerWall.create(30+20*j, 30+20*i, 'outerWall');
                    wall.body.immovable = true;
                }
                // Create interior bank walls and add them to the 'walls' group
                if (level[i][j] == 'o') {
                    var wall = this.innerWall.create(30+20*j, 30+20*i, 'innerWall');
                    wall.body.immovable = true;
                }
            }
        }

      this.outerWall.scale.setTo(1,1);

      // Code for guard(s) TODO: Get sprites to work. Animate.
      this.badguy = this.add.sprite(400, 1500, 'guard');
      this.physics.arcade.enable(this.badguy);
      this.badguy.body.collideWorldBounds = true;
      // this.badguy.animations.add('moveLeft', [0, 1], 4, true )
      // this.badguy.animations.add('moveRight', [2, 3], 4, true )
      this.badguy.animations.add('walk');
      this.badguy.animations.play('walk', 8, true)


       // The player and its settings
      player = this.add.sprite(this.world.centerX, this.world.height - 390, 'dude')
      // player.body.setSize(20, 30, 0, 0)

      //  We need to enable physics on the player
      this.physics.arcade.enable(player);

      // player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;

      //  Our two animations, walking left and right.
      player.animations.add('left', [0, 1, 2, 3], 10, true);
      player.animations.add('right', [5, 6, 7, 8], 10, true);

      //  Our controls.
      cursors = this.input.keyboard.createCursorKeys();
      x = this.input.keyboard.addKey(Phaser.Keyboard.X);

      // stars and diamonds added to group.
      stars = this.add.group();
      diamonds = this.add.group();


      //  We will enable physics for any star that is created in this group
      stars.enableBody = true;
      diamonds.enableBody = true;

      //  Here we'll create 12 of them evenly spaced apart
        for (var i = 1; i < 13; i++)
      {
          //  Create a star inside of the 'stars' group
          var star = stars.create(i * 70, 1500, 'star');

      }

      for (var i = 1; i < 7; i++)
      {
          //  Create a star inside of the 'stars' group
          var diamond = diamonds.create(i * 70, 1550, 'diamond');


      }

      // Defines maximum possible score, please put all new 'diamonds', 'stars' etc. above
      // Used to define end of game and determine final score with timer bonus etc.
      // Meggan and Shaila know what's goin on
      // Don't delete
      maxPossibleScore = ((diamonds.length * 50) + (stars.length * 10));

      //  The current level score controls
      scoreText = this.add.text(100, 67, '$0', this.style1);
      scoreText.fixedToCamera = true;

      // promptText variable
      promptText = this.add.text(480, 506, 'Press (key) to (action)', this.style2);
      promptText.fixedToCamera = true;

      // timerText variable to display the time
      timerText = this.add.text(900, 20, '', this.style1);
      timerText.fixedToCamera = true;

      this.camera.follow(player);
      this.camera.deadzone = new Phaser.Rectangle(450, 250, 100, 100);

      // Appearing Text
      // var fadeText1 = game.time.events.add(2000, function() {    game.add.tween("myTex").to({y: 0}, 1500, Phaser.Easing.Linear.None, true); game.add.tween("myText").to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);}, this);
      // fadeText1.fixedToCamera = true;
      // fadeText2.fixedToCamera = true;

      extractLocation = this.add.group();
      extractLocation.enableBody = true;
      // extractLocation.body.immovable = true;
      var extract = extractLocation.create(this.world.centerX + 100, this.world.height - 390, 'firstaid')

      promptText.anchor.setTo(0.5, 0.5);
      this.clearPromptText();


  },

  update: function () {

      // var updateTime = function() {
        // this.paused = true;
        // console.log(this.timer.duration * 0.001 + " seconds left on timer");
      // }


       //  Collide the player and the stars with the platforms
      this.physics.arcade.collide(player, platforms);
      this.physics.arcade.collide(player, this.innerWall);
      this.physics.arcade.collide(player, this.outerWall);
      this.physics.arcade.collide(player, this.badguy)
      this.physics.arcade.collide(stars, platforms);
      this.physics.arcade.collide(diamonds, platforms)
      this.physics.arcade.collide(this.badguy, platforms)


      //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
      this.physics.arcade.overlap(player, stars, this.collectStar, null, this);
      this.physics.arcade.overlap(player, diamonds, this.collectDiamond, null, this);
      var extrct = this.physics.arcade.overlap(player, extractLocation, this.dropOff, null, this)


      //  Reset the players velocity (movement)
      player.body.velocity.x = 0;
      player.body.velocity.y = 0;

      if (cursors.left.isDown)
      {
          //  Move to the left
          player.body.velocity.x = -250;

          player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
          //  Move to the right
          player.body.velocity.x = 250;

          player.animations.play('right');
      }
      else
      {
          //  Stand still
          player.animations.stop();


          player.frame = 4;

      }

      if (cursors.up.isDown) {
          player.body.velocity.y = -250;
      }
      else if (cursors.down.isDown) {
          player.body.velocity.y = 250;
      }

      if (extrct === true && x.isDown) {
        promptText.text = "YOU GOT AWAY"
        // game.state.start('MainMenu2');
        this.add.button(this.world.centerX, 500, "Next level");
        updateTime();
        Heist.totalScore += this.score;
        this.paused = true;
      }

  },


  render: function () {
    // if (timer.running) {
    //     timerText.text = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
    // }
    // else {
    //   var endGameTime = this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000));
    //   timerText.text = "Done!" + endGameTime ;
    //
    //   //this.timeOut();
    //   return this.timeOut();
    //
    //   //TODO  Make the game end.
    // }

    // For camera debugging only. Plz don't delete.
    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.spriteCoords(player, 32, 500);
  },


  endTimer: function () {
    // Stop the timer when the delayed event triggers
    timer.stop();
  },
  formatTime: function (s) {
    // Convert into seconds.
    this.minutes = "0" + Math.floor(s/ 60);
    this.seconds = "0" + Math.floor(s - minutes * 60);
    return this.minutes.substr(-2) + ":" + this.seconds.substr(-2)
  },
  dropOff: function(player, extract) {
    promptText.text = 'Press X to leave.';
    this.clearPromptText();
  },
  collectStar: function (player, star) {
      // Removes the star from the screen
      star.kill();

      //  Add and update the score
      this.score += 10;
      scoreText.text = '$' + this.score;
      this.fadePromptText();
      promptText.text = '+$10'
      this.getAll();

  },
  collectDiamond: function(player, diamond) {

      // Removes the diamond from the screen
      diamond.kill();

      //  Add and update the score
      this.score += 50;
      scoreText.text = '$' + this.score;
      this.fadePromptText();
      promptText.text = '+$50'
      this.getAll();
  },
  fadePromptText: function() {
    promptText.alpha = 0;
    this.add.tween(promptText).from( { alpha: 1 }, 500, Phaser.Easing.easeOut, true, 800);
  },
  clearPromptText: function() {
    promptText.alpha = 0;
    this.add.tween(promptText).from( { alpha: 1 }, 200, Phaser.Easing.default, true, 100);
  },
  timeOut: function () {
    promptText.alpha = 1;
    promptText.text = "TIME UP!";
  },
  getAll: function() {
    if (this.score === maxPossibleScore) {
        promptText.text = "You've collected all the money, now get out!"
        this.fadePromptText();
      }
  }

}; // End of LevelOne
