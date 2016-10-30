var game = new Phaser.Game(1000, 600, Phaser.AUTO, '' );

var LevelOne = function( game ) {};

LevelOne.Boot = function( game ) {};

var player;
var platforms;
var cursors;
var stars;
var diamonds;
var extractLocation;
var score = 0;
var scoreText, promptText;
var style1 = { font: '30px Arial', fill: '#00FFFF' },
    style2 = { font: '22px Arial', fill: '#00FFFF', align: 'centerY' };
var opaqimg;
var timer, timerEvent, text

LevelOne.Boot.prototype = {
  preload: function() {

        game.load.image('background', 'assets/phaser_background-02.png');
        game.load.image('opacity', 'assets/opacity-02.png');
        game.load.image('key', 'assets/key-01.png');
        //game.load.image('ground', 'assets/platform.png');
        game.load.image('ground', 'assets/walls/ground.png');
        game.load.image('ground-right', 'assets/walls/ground.png');
        game.load.image('inner-wall-h', 'assets/walls/inner-wall-h.png');
        game.load.image('inner-wall-v', 'assets/walls/inner-wall-v.png');
        game.load.image('inner-wall-h-small', 'assets/walls/inner-wall-h-small.png');
        game.load.image('inner-wall-v-small', 'assets/walls/inner-wall-v-small.png');
        game.load.image('side-wall', 'assets/walls/side-wall.png');
        game.load.image('back-wall', 'assets/walls/back-wall.png');
        game.load.image('entrance', 'assets/walls/entrance.png');
        game.load.image('star', 'assets/star.png');
        game.load.image('diamond', 'assets/diamond.png')
        game.load.image('firstaid', 'assets/firstaid.png')
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    },

  create: function () {


    //create the external walls
    this.game.scale.pageAlignHorizontally = true;this.game.scale.pageAlignVertically = true;this.game.scale.refresh();

      // Create a custom timer
      timer = game.time.create();

      // Create a delay countdown timer, given params.
      timerEvent = timer.add(Phaser.Timer.MINUTE * 1 + Phaser.Timer.SECOND * 30, this.endTimer, this);

      // Start the timer!
      timer.start();

      //  We're going to be using physics, so enable the Arcade Physics system
      game.physics.startSystem(Phaser.Physics.ARCADE);

      //  A simple background for our game
      game.add.tileSprite(0, 0, 1920, 1920, 'background');
      game.world.setBounds(0, 0, 1920, 1920);

      //  The platforms group contains the walls to containethe sprite
      platforms = game.add.group();

      opaqimg = game.add.sprite(1000, 600, 'opacity');
      opaqimg.fixedToCamera = true;
      opaqimg.cameraOffset.setTo(0, 0);

      keyimg = game.add.sprite(150, 95, 'key');
      keyimg.fixedToCamera = true;
      keyimg.cameraOffset.setTo(20, 20);

      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;

      this.ground = game.add.group();
      this.ground.enableBody = true;

      //this.ground.create(1014, game.world.height - 330, 'ground');
      var ground = platforms.create(60, game.world.height - 1860, 'side-wall');
      ground.body.immovable = true;
      var ground = platforms.create(60, game.world.height - 1860, 'back-wall');
      ground.body.immovable = true;
      var ground = platforms.create(1842, game.world.height - 1860, 'side-wall');
      ground.body.immovable = true;
      var ground = platforms.create(1014, game.world.height - 330, 'entrance');
      ground.body.immovable = true;
      var ground = platforms.create(888, game.world.height - 330, 'entrance');
      ground.body.immovable = true;

      // Here we create the bottom edge of the bank - ground.
      var ground = platforms.create(1014, game.world.height - 330, 'ground');
      //  This stops it from falling away when you jump on it
      ground.body.immovable = true;

      var ground = platforms.create(60, game.world.height - 330, 'ground');
      ground.body.immovable = true;
      //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
      ground.scale.setTo(1, 1);

      // create the internal bank walls that cannot move and are half the size of extrnal walls
      this.wall = game.add.group();
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


      wall.scale.setTo(1,1);


       // The player and its settings
      player = game.add.sprite(game.world.centerX, game.world.height - 390, 'dude')
      // player.body.setSize(20, 30, 0, 0)

      //  We need to enable physics on the player
      game.physics.arcade.enable(player);

      // player.body.gravity.y = 300;
      player.body.collideWorldBounds = true;

      //  Our two animations, walking left and right.
      player.animations.add('left', [0, 1, 2, 3], 10, true);
      player.animations.add('right', [5, 6, 7, 8], 10, true);

      //  Our controls.
      cursors = game.input.keyboard.createCursorKeys();

      // stars and diamonds added to group.
      stars = game.add.group();
      diamonds = game.add.group()

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

      //  The current level score controls
      scoreText = game.add.text(100, 67, '0', style1);
      scoreText.fixedToCamera = true

      // promptText variable
      promptText = game.add.text(420, 506, 'Press (key) to (action)', style2);
      promptText.fixedToCamera = true

      game.camera.follow(player);
      game.camera.deadzone = new Phaser.Rectangle(450, 250, 100, 100);

      // Appearing Text
      // var fadeText1 = game.time.events.add(2000, function() {    game.add.tween("myTex").to({y: 0}, 1500, Phaser.Easing.Linear.None, true); game.add.tween("myText").to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);}, this);
      // fadeText1.fixedToCamera = true;
      // fadeText2.fixedToCamera = true;

      extractLocation = game.add.group();
      extractLocation.enableBody = true;
      // extractLocation.body.immovable = true;
      var extract = extractLocation.create(game.world.centerX + 100, game.world.height - 390, 'firstaid')

      promptText.anchor.setTo(0.5, 0.5);
      this.clearPromptText();


  },

  update: function () {

       //  Collide the player and the stars with the platforms
      game.physics.arcade.collide(player, platforms);
      // game.physics.arcade.collide(player, extractLocation);
      game.physics.arcade.collide(stars, platforms);
      game.physics.arcade.collide(diamonds, platforms)

      //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
      game.physics.arcade.overlap(player, stars, this.collectStar, null, this);
      game.physics.arcade.overlap(player, diamonds, this.collectDiamond, null, this);
      game.physics.arcade.overlap(player, extractLocation, this.dropOff, null, this)


      //  Reset the players velocity (movement)
      player.body.velocity.x = 0;
      player.body.velocity.y = 0;

      if (cursors.left.isDown)
      {
          //  Move to the left
          player.body.velocity.x = -150;

          player.animations.play('left');
      }
      else if (cursors.right.isDown)
      {
          //  Move to the right
          player.body.velocity.x = 150;

          player.animations.play('right');
      }
      else
      {
          //  Stand still
          player.animations.stop();

          player.frame = 4;
      }

      if (cursors.up.isDown)
      {
          player.body.velocity.y = -150;
      }
      else if (cursors.down.isDown)
      {
          player.body.velocity.y = 150;
      }
  },
  render: function () {
    if (timer.running) {
      game.debug.text(this.formatTime(Math.round((timerEvent.delay - timer.ms) / 1000)), 940, 20, "#00FFFF");
    }
    else {
      game.debug.text("Done!", 940, 14, "#0f0");
    }
    // For camera debugging only. Plz don't delete.
    // game.debug.cameraInfo(game.camera, 32, 32);
    // game.debug.spriteCoords(player, 32, 500);
  },
  endTimer: function () {
    // Stop the timer when the delayed event triggers
    timer.stop();
  },
  formatTime: function (s) {
    // Conver into seconds.
    var minutes = "0" + Math.floor(s/ 60);
    var seconds = "0" + Math.floor(s - minutes * 60);
    return minutes.substr(-2) + ":" +seconds.substr(-2)
  },
  dropOff: function(player, extract) {
    this.clearPromptText();
    promptText.text = 'Press X to leave.';
  },
  collectStar: function (player, star) {
      // Removes the star from the screen
      star.kill();

      //  Add and update the score
      score += 10;
      scoreText.text = 'Take: $' + score;
      this.fadePromptText();
      promptText.text = '+$10'

  },
  collectDiamond: function(player, diamond) {

      // Removes the diamond from the screen
      diamond.kill();

      //  Add and update the score
      score += 50;
      scoreText.text = 'Take: $' + score;
      this.fadePromptText();
      promptText.text = '+$50'
  },
  // TODO Need a way to clear the prompt text from screen.
  fadePromptText: function() {
    promptText.alpha = 0;
    game.add.tween(promptText).from( { alpha: 1 }, 500, Phaser.Easing.easeOut, true, 1000);
  },
  clearPromptText: function() {
    promptText.alpha = 0;
    game.add.tween(promptText).from( { alpha: 1 }, 400, Phaser.Easing.default, true, 600);
  }

}; // END OF LevelOne

game.state.add('Boot', LevelOne.Boot);
game.state.start('Boot');
