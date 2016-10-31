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

};

Heist.LevelOne.prototype = {
  create: function () {

    //create the external walls
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

      //  The platforms group contains the walls to containethe sprite
      platforms = this.add.group();

      opaqimg = this.add.sprite(1000, 600, 'opacity');
      opaqimg.fixedToCamera = true;
      opaqimg.cameraOffset.setTo(0, 0);

      keyimg = this.add.sprite(150, 95, 'key');
      keyimg.fixedToCamera = true;
      keyimg.cameraOffset.setTo(20, 20);

      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;

      this.ground = this.add.group();
      this.ground.enableBody = true;

      //this.ground.create(1014, game.world.height - 330, 'ground');
      var ground = platforms.create(60, this.world.height - 1860, 'side-wall');
      ground.body.immovable = true;
      var ground = platforms.create(60, this.world.height - 1860, 'back-wall');
      ground.body.immovable = true;
      var ground = platforms.create(1842, this.world.height - 1860, 'side-wall');
      ground.body.immovable = true;
      var ground = platforms.create(1014, this.world.height - 330, 'entrance');
      ground.body.immovable = true;
      var ground = platforms.create(888, this.world.height - 330, 'entrance');
      ground.body.immovable = true;
      // Here we create the bottom edge of the bank - ground.
      var ground = platforms.create(1014, this.world.height - 330, 'ground');
      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;
      var ground = platforms.create(60, this.world.height - 330, 'ground');
      ground.body.immovable = true;
      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(1, 1);

      // create the internal bank walls that cannot move and are half the size of extrnal walls
      this.wall = this.add.group();
      this.wall.enableBody = true;

      var wall = platforms.create(560, 1400, 'inner-wall-h');
      wall.body.immovable = true;
      var wall = platforms.create(560, 635, 'inner-wall-v');
      wall.body.immovable = true;
      var wall = platforms.create(1326, 635, 'inner-wall-v');
      wall.body.immovable = true;
      var wall = platforms.create(300, 60, 'inner-wall-v');
      wall.body.immovable = true;
      var wall = platforms.create(300, 410, 'inner-wall-h');
      wall.body.immovable = true;
      var wall = platforms.create(1065, 180, 'inner-wall-v');
      wall.body.immovable = true;
      var wall = platforms.create(1065, 635, 'inner-wall-h-small');
      wall.body.immovable = true;
      var wall = platforms.create(1065, 180, 'inner-wall-h-small');
      wall.body.immovable = true;
      var wall = platforms.create(1473, 410, 'inner-wall-h-small');
      wall.body.immovable = true;
      var wall = platforms.create(760, 945, 'inner-wall-h-small');
      wall.body.immovable = true;
      var wall = platforms.create(500, 634, 'inner-wall-h-small');
      wall.body.immovable = true;
      var wall = platforms.create(760, 845, 'inner-wall-v-small');
      wall.body.immovable = true;


      wall.scale.setTo(1,1);


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
      scoreText.fixedToCamera = true

      // promptText variable
      promptText = this.add.text(480, 506, 'Press (key) to (action)', this.style2);
      promptText.fixedToCamera = true

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

      var updateTime = function() {
        this.paused = true;
        console.log(this.timer.duration * 0.001 + " seconds left on timer");
      }

       //  Collide the player and the stars with the platforms
      this.physics.arcade.collide(player, platforms);
      // this.physics.arcade.collide(player, extractLocation);
      this.physics.arcade.collide(stars, platforms);
      this.physics.arcade.collide(diamonds, platforms)

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
          // console.log(Heist.totalScore);
      }

      if (extrct === true && x.isDown) {
        promptText.text = "YOU GOT AWAY"
        // game.state.start('MainMenu2');
        this.add.button(this.world.centerX, 500, "Next level");
        updateTime();
        Heist.totalScore += this.score;
        this.paused = true;
      }

      if (this.score === maxPossibleScore) {
        promptText.text = "You've collected all the money, now get out!"
        this.fadePromptText();
      }
  },


  render: function () {
    // if (this.timer.running) {
      // this.debug.text(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), 940, 20, "#00FFFF");

      // If statement is working. Console is logging.
      // debugger;
    // }
    // else {
    //   this.this.debug.text("Done!", 940, 14, "#00FFFF");
    //   this.timeOut();

      //TODO  Make the game end.
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
  },
  collectDiamond: function(player, diamond) {

      // Removes the diamond from the screen
      diamond.kill();

      //  Add and update the score
      this.score += 50;
      scoreText.text = '$' + this.score;
      this.fadePromptText();
      promptText.text = '+$50'
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
  }

}; // End of LevelOne
