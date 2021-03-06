var Heist = Heist || {};


Heist.LevelOne = function(game) {
  this.player;
  this.totalLives;
  // this.health = 90;
  this.platforms;
  this.cursors;
  this.x;
  this.g;
  this.gold;
  this.money;
  this.extractLocation;
  this.score = 0;
  this.totalScore = 0;
  this.scoreText;
  this.promptText;
  this.promptText2;
  this.timeDisplay;
  this.style1 = { font: '17px Alegreya Sans SC', fill: '#00FFFF' };
  this.style2 = { font: '37px Alegreya Sans SC', fill: '#073D76', align: 'centerY' };
  this.style2.stroke = '#FFFFFF';
  this.style2.strokeThickness = 5;
  this.style3 = { font: '37px Alegreya Sans SC', fill: '#00FFFF', align: 'centerY' };
  this.opaqimg;
  this.timer;
  this.timerEvent;
  this.text;
  this.maxPossibleScore;
  this.badguy;
  this.cop;
  this.count
  this.outerWall;
  this.outerwalls;
  this.lasers;
  this.dog;

  // Sound variables
  this.footsteps;
  this.footStepSound;


  //Weight limit variable
  this.maxWeight = 0;
  this.playerCarryValue = 0;
};

Heist.LevelOne.prototype = {
  create: function () {
    //centre the game on the browser page
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.refresh();

      this.timer = this.time.create();

      // // Start the timer!
      this.timer.start();

      //  We're going to be using physics, so enable the Arcade Physics system
      this.physics.startSystem(Phaser.Physics.ARCADE);
      this.physics.startSystem(Phaser.Physics.BODY);

      //  Background sprite and bounds for the game
      this.add.tileSprite(0, 0, 1920, 1920, 'background');
      this.world.setBounds(0, 0, 1920, 1920);

      //  The platforms group contains the walls to contain the sprite
      platforms = this.add.group();

      //  We will enable physics for any object that is created in this group
      platforms.enableBody = true;

      // Game walls and features in via a loop function
      this.outerWall = this.game.add.group();
      this.outerWall.enableBody = true;
      this.innerWall = this.game.add.group();
      this.innerWall.enableBody = true;
      this.kWall = this.game.add.group();
      this.kWall.enableBody = true;
      this.money = this.game.add.group();
      this.money.enableBody = true;
      this.gold = this.game.add.group();
      this.gold.enableBody = true;
      this.diamonds = this.game.add.group();
      this.diamonds.enableBody = true;
      this.cops = this.game.add.group();
      this.cops.enableBody = true;
      this.lasers = this.game.add.group();
      this.lasers.enableBody = true;
      this.heart = this.game.add.group();
      this.heart.enableBody = true;


      var level = [
          '# # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #',
          '                                                                                     ',
          '#      ^ *       *                                                                  #',
          '         *       B                                                                   ',
          '#        *       B                                           ^                      #',
          '         *       B                                                                   ',
          '#        *       B                                ****************************    **#',
          '         *       *                                *                                  ',
          '#        *       *                              ^ *                                 #',
          '         a       *                                *                                  ',
          '#        a     ^ *                                *                                 #',
          '         a       *                                *               ^                  ',
          '#        a       *                                *                                 #',
          '         *       **bbbb******************cccc******             **************dddd** ',
          '#        *       B                                C                         *       #',
          '         *       B                                C                         *     3  ',
          '#        *       B                                C                         *       #',
          '         *       B                                C                         *        ',
          '#        *       *                                *******eeee*********      *       #',
          '         *       *                              ^ *           *             *        ',
          '# **    **       *                                *           *             *     ^ #',
          '         *       *      *********llll**************           *             *        ',
          '#        *       *      * ^   *        &          *           E             *       #',
          '         *       *      *     *                   *           E             ***DDDD* ',
          '#        *       b      *     *                   *           E                     #',
          '         *       b      *     *                   *           E                      ',
          '#        *       b      *              *          *           *                     #',
          '         *       b      *              *          *           *                      ',
          '#        A       *      *              *          *           *                     #',
          '         A       *      L              *    @     *           *                      ',
          '#        A       *      L     *        *   @@@    *           *                     #',
          '         A       *      L     *        *  @@@@@   *           *                      ',
          '#        *       *      L     *        * @@@@@@@  *           *                     #',
          '         *       *      *     *        *@@@@@@@@@ *           *                      ',
          '#        *       *      *******        ************           *                     #',
          '         *       *            *                               *                      ',
          '#        *       *            *                               *                     #',
          '  ^      *       *            *                               *                      ',
          '#        *       *            *                               g                     #',
          '  ****************            *                               g                      ',
          '#                             *                               g                     #',
          '                              *                               g           ***FFFF*** ',
          '#                             *^                              *           *         #',
          '                              *                               *           *          ',
          '# *****hhhh*******          ^ *                               *           *         #',
          '                 *            G                               *           *          ',
          '#                *            G                               *           *         #',
          '                 *            G                               *           f          ',
          '#                *            G                               *           f         #',
          '                 *            *                               *           f          ',
          '#                *            *                               *           f         #',
          '                 *            *                             ^ *           *          ',
          '#                *            *                               *           *         #',
          '                 *            *********************************           *          ',
          '#                *                                                        *         #',
          '                 *                                                        *          ',
          '#                *                                                        *^        #',
          '                 H                                                        *          ',
          '# ********       H                                                        *         #',
          '  ^      *       H                                                        *          ',
          '#        *       H                                                        *         #',
          '         *       *                                                        *          ',
          '#        *       *                                                        *         #',
          '         *       *                                                        *          ',
          '#        *       *             ^                                          *         #',
          '         *       *                                                      ^ *          ',
          '#        *       ****************                                         *         #',
          '         *       *                                         ****************          ',
          '#        *       *                                         *              *         #',
          '                 *                                         *              *          ',
          '#                *                                         *              *         #',
          '                 *                                         *              K          ',
          '#                *^                                        *              K         #',
          '         *       *                                         *              K          ',
          '#        *       *                                         k              K         #',
          '         *       *                                         k              *          ',
          '#      ^ *       *                                         k            ^ *^        #',
          '         *       *                                         k              *          ',
          '# # # # # # # # # # # # # # # # # # # #         # # # # # # # # # # # # # # # # # # #',
          '                                                                                     ',
          '                                      #         #,                                   ',
          '                                                                                     ',
          '                                      #         #,                                   '
      ];

        // the following code looks at random walls being placed where the letters are on the map above
        var isLetter = function( c ) {
          return c.toLowerCase() != c.toUpperCase();
        }

        // wallDrawLookup stores a hash of keys which are letters of the alphabet, corresponding to wall groups
        // Uppercase and lowercase letter belong to the same group but are mutually exclusive
        // i.e. if the 'r' group is drawn, the 'R' group should not be drawn
        var wallDrawLookup = {};

        // testWallBlock checks whether a coin toss has been made for this letter, and if not does a coin
        // toss and remembers the result, and also toggles the toss value for the opposite-cased same letter
        var testWallBlock = function ( letter ) {

          if( typeof wallDrawLookup[letter] == 'undefined' ) {

              // first time seeing this key, so do coin toss, and save result
              var toss = Math.random() < 0.5;
              var oppositeGroup;

              // remember coin toss for this letter
              wallDrawLookup[letter] = toss;

              if( letter === letter.toLowerCase() ){
                // letter is lowercase, so oppositeGroup must be the uppercase version
                oppositeGroup = letter.toUpperCase();
              } else {
                // letter is uppercase, so oppositeGroup must be the lowercase version
                oppositeGroup = letter.toLowerCase();
              }

              wallDrawLookup[oppositeGroup] = !toss;
          }
          // else: if the key is already defined, we just return it below

          return wallDrawLookup[letter];
        };

        // Create the level by going through the array
        for (var i = 0; i < level.length; i++) {
            for (var j = 0; j < level[i].length; j++) {

                // Create exterior bank walls and add the to the 'walls' group
                if (level[i][j] == '#') {
                    var wall = this.outerWall.create(30+20*j, 30+20*i, 'outerWall');
                    wall.body.immovable = true;
                }
                // Create interior bank walls and add them to the 'walls' group
                if (level[i][j] == '*') {
                    var wall = this.innerWall.create(30+20*j, 30+20*i, 'innerWall');
                    wall.body.immovable = true;
                }
                if (level [i][j] == '^'){
                    var money = this.money.create(30+20*j, 30+20*i, 'money');
                    money.body.immovable = false;
                    //money.enableBody = true;
                }

                if (level [i][j] == '&'){
                    var lasers = this.lasers.create(30+20*j, 30+20*i, 'laser');
                    lasers.body.immovable = true;
                    //money.enableBody = true;
                }

                if (level [i][j] == '3'){
                    var heart = this.heart.create(30+20*j, 30+20*i, 'heart');
                    heart.body.immovable = true;
                    //money.enableBody = true;
                  }

                if (level [i][j] == '@'){
                    var gold = this.gold.create(30+20*j, 30+20*i, 'gold');
                    gold.body.immovable = false;
                    //gold.enableBody = true;
                }

                // if (level[i][j] == '%'){
                  // var cop = this.cops.create(30+20*j, 30+20*i, 'cop');
                  // cop.physics.arcade.enable = true;
                  // cop.body.immovable = false;
                  // cop.body.setCircle(25);

                  // cop.body.velocity.x = 120;
                // }

                // Check if current cell is an alphabet letter, and decide whether to draw the
                // wall for that letter group
                if (isLetter( level[i][j] ) && testWallBlock( level[i][j] )){
                    // draw the wall section if our lookup function returns true
                    var wall = this.kWall.create(30+20*j, 30+20*i, 'innerWall');
                     wall.body.immovable = true;
                }// if isLetter
            }// for j
        }// for i

      this.outerWall.scale.setTo(1,1);

      opaqimg = this.add.sprite(1000, 600, 'opacity');
      opaqimg.fixedToCamera = true;
      opaqimg.cameraOffset.setTo(0, 0);

      keyimg = this.add.sprite(150, 95, 'key');
      keyimg.fixedToCamera = true;
      keyimg.cameraOffset.setTo(20, 20);


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


      // guard dog
      this.dog = this.game.add.sprite(300, 450, 'guardDog');
      this.physics.arcade.enable(this.dog);

      this.cop = this.game.add.sprite(800, 1450, 'cop');
      this.cop2 = this.game.add.sprite(250, 400, 'cop');
      this.cop3 = this.game.add.sprite(1200, 310, 'cop');
      this.cop4 = this.game.add.sprite(900, 800, 'cop');
      this.physics.arcade.enable(this.cop);
      this.physics.arcade.enable(this.cop2);
      this.physics.arcade.enable(this.cop3);
      this.physics.arcade.enable(this.cop4);

      this.cop.body.setCircle(30);
      this.cop2.body.setCircle(30);
      this.cop3.body.setCircle(30);
      this.cop4.body.setCircle(30);
      this.cop.body.static = true;
      this.cop2.body.static = true;



      this.dog.frame = 12;
      this.dog.body.collideWorldBounds = true;
      this.dog.body.velocity.x = -100;
      this.dog.body.bounce.setTo(1,1);

      this.cop.frame = 12;
      this.cop2.frame = 12;
      this.cop3.frame = 12;
      this.cop4.frame = 12;
      this.cop.body.collideWorldBounds = true;
      this.cop2.body.collideWorldBounds = true;
      this.cop3.body.collideWorldBounds = true;
      this.cop4.body.collideWorldBounds = true;
      this.cop.body.velocity.x = -100;
      this.cop2.body.velocity.y = -100;
      this.cop3.body.velocity.x = -100;
      this.cop4.body.velocity.y = -200;
      this.cop.body.bounce.setTo(1,1);
      this.cop2.body.bounce.setTo(1,1);
      this.cop3.body.bounce.setTo(1,1);
      this.cop4.body.bounce.setTo(1,1);

      this.dog.animations.add('left', [0, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12], 12, true);
      this.dog.animations.add('right', [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25], 12, true);

      this.dog.animations.play('left');
      // debugger;
      //this.physics.arcade.moveToObject(this.dog, player, 200, 3000);
      // this.moveDog();

      //  Our controls.
      cursors = this.input.keyboard.createCursorKeys();
      x = this.input.keyboard.addKey(Phaser.Keyboard.X);
      v = this.input.keyboard.addKey(Phaser.Keyboard.V);
      s = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      g = this.input.keyboard.addKey(Phaser.Keyboard.G);
      b = this.input.keyboard.addKey(Phaser.Keyboard.B);

      // this.heart = this.add.sprite(this.world.centerX, this.world.height - 450, 'heart')
      // this.physics.arcade.enable(this.heart);
      // this.heart.body.collideWorldBounds = true;

      // add money, gold bars and cops to the group
      money = this.add.group();
      gold = this.add.group();


      // for (var i = 1; i < 4; i++) {
        // var cop = this.cops.create(i * 150, 1500, 'cop');
        // cop.body.velocity.x = 120;
        // cop.body.setCircle(25);

      // }
      // Defines maximum possible score, please put all new 'collectables', ie gold, money, etc. above
      // Used to define end of game and determine final score with timer bonus etc.
      maxPossibleScore = ((this.gold.length * 10) + (this.money.length * 10)) ;

      //  The current level score controls
      scoreText = this.add.text(100, 67, '$0', this.style1);
      scoreText.fixedToCamera = true;

      // promptText variable
      promptText = this.add.text(480, 506, 'Press (key) to (action)', this.style2);
      promptText.anchor.setTo(0.5, 0.5);
      promptText.fixedToCamera = true;

      //PrompteText2
      promptText2 = this.add.text(480, 520, '', this.style2);
      promptText2.anchor.setTo(0.5, 0.5);
      promptText2.fixedToCamera = true;

      // Time display text. ONLY used to display time.
      timeDisplay = this.add.text(900, 40, '0:00', this.style2);
      timeDisplay.anchor.setTo(0.5, 0.5);
      timeDisplay.fixedToCamera = true;

      // NotificationText varaible
      notificationText = this.add.text(480, 480, '', this.style3);
      notificationText.anchor.setTo(0.5, 0.5);
      notificationText.fixedToCamera = true;

      // timerText variable to display the time
      timerText = this.add.text(900, 20, '', this.style1);
      timerText.fixedToCamera = true;

      // allows the screen to adjust with the movement of the player an dcreates a deadzone around it
      this.camera.follow(player);
      this.camera.deadzone = new Phaser.Rectangle(450, 250, 10, 10);

      // Appearing Text
      // var fadeText1 = game.time.events.add(2000, function() {    game.add.tween("myTex").to({y: 0}, 1500, Phaser.Easing.Linear.None, true); game.add.tween("myText").to({alpha: 0}, 1500, Phaser.Easing.Linear.None, true);}, this);
      // fadeText1.fixedToCamera = true;
      // fadeText2.fixedToCamera = true;

      extractLocation = this.add.group();
      extractLocation.enableBody = true;
      // extractLocation.body.immovable = true;
      var extract = extractLocation.create(this.world.centerX + 100, this.world.height - 390, 'firstaid');


      lasers = this.game.add.group();
      lasers.enableBody = true;


      this.physics.enable(lasers, Phaser.Physics.ARCADE);
      this.physics.arcade.enable([player, lasers]);

      this.clearText(promptText);
      // this.clearText(promptText2);
      this.fadeText(notificationText);

      var spawnTimer = Math.round(this.time.totalElapsedSeconds());

      if (spawnTimer % 15 === 0) {
        this.createBadGuy(480, 550);
      }

      //SOUNDS ///////////////////////////////////////////////////////////
      // cursors = this.input.keyboard.createCursorKeys();
      // x = this.input.keyboard.addKey(Phaser.Keyboard.X);
      this.footStepSound = this.add.audio('stepsound');
      this.dogbark = this.add.audio('woof');
  },

  update: function () {

      var timeYay = this.time.now

      // var updateTime = function() {
        // this.paused = true;
        // console.log(this.timer.duration * 0.001 + " seconds left on timer");
      // }

       //  Collision for things.
      this.physics.arcade.collide(player, platforms);
      this.physics.arcade.collide(player, this.innerWall);
      this.physics.arcade.collide(player, this.outerWall);
      this.physics.arcade.collide(player, this.kWall);
      this.physics.arcade.collide(this.heart, platforms);
      this.physics.arcade.collide(this.badguy, platforms);
      this.physics.arcade.collide(this.cop, platforms);
      this.physics.arcade.collide(this.cop, this.innerWall);
      this.physics.arcade.collide(this.cop, this.outerWall);
      this.physics.arcade.collide(this.cop, player, this.getHurtBoi );



      //Test for health loss on collision.
      // this.physics.arcade.collide(player, this.cop, this.ballHitBallHandler(), this.ballHitBallProcess(), this);

      this.physics.arcade.collide(this.cop, this.kWall);
      this.physics.arcade.collide(this.cop2, platforms);
      this.physics.arcade.collide(this.cop2, this.innerWall);
      this.physics.arcade.collide(this.cop2, this.outerWall);
      this.physics.arcade.collide(this.cop2, player, this.getHurtBoi );
      this.physics.arcade.collide(this.cop2, this.kWall);
      this.physics.arcade.collide(this.cop3, platforms);
      this.physics.arcade.collide(this.cop3, this.innerWall);
      this.physics.arcade.collide(this.cop3, this.outerWall);
      this.physics.arcade.collide(this.cop3, player, this.getHurtBoi );
      this.physics.arcade.collide(this.cop3, this.kWall);
      this.physics.arcade.collide(this.cop4, platforms);
      this.physics.arcade.collide(this.cop4, this.innerWall);
      this.physics.arcade.collide(this.cop4, this.outerWall);
      this.physics.arcade.collide(this.cop4, player, this.getHurtBoi );
      this.physics.arcade.collide(this.cop4, this.kWall);
      this.physics.arcade.collide(this.money, platforms);
      this.physics.arcade.collide(this.gold, platforms);
      //this.physics.arcade.collide(this.lasers, player);
      this.physics.arcade.collide(this.lasers, player);
      // this.physics.arcade.collide(heart, player);

      this.physics.arcade.collide(this.dog, platforms);
      // this.physics.arcade.collide(this.dog, this.outerWall);
      this.physics.arcade.collide(this.dog, player, this.getHurtBoi );
      this.physics.arcade.collide(player, this.dog, this.getHurtBoi);
      this.physics.arcade.collide(this.dog, this.kWall, this.dogHitWallInner);
      this.physics.arcade.collide(this.dog, this.innerWall, this.dogHitWallInner);
      this.physics.arcade.collide(this.dog, this.outerWall, this.dogHitWallOuter);



      //  Checks to see if the player overlaps with any of the gold or money or heart, if he does call a 'collect' function
      this.physics.arcade.overlap(player, this.money, this.collectMoney, null, this);
      this.physics.arcade.overlap(player, this.gold, this.collectGold, null, this);
      this.physics.arcade.overlap(player, this.heart, this.heartPrompt, null, this);

      if (Math.abs(player.x - this.cop.x) <= 100 && Math.abs(player.y - this.cop.y) <= 100){
        this.physics.arcade.moveToObject(this.cop, player, 5000, 1000);
      }

      if (Math.abs(player.x - this.cop2.x) <= 200 && Math.abs(player.y - this.cop2.y) <= 200) {
        this.physics.arcade.moveToObject(this.cop2, player, 8000, 1000);
      }

      if (Math.abs(player.x - this.cop3.x) <= 100 && Math.abs(player.y - this.cop3.y) <= 100) {
        this.physics.arcade.moveToObject(this.cop3, player, 5000, 1000);
      }

      if (Math.abs(player.x - this.cop4.x) <= 200 && Math.abs(player.y - this.cop4.y) <= 200) {
        this.physics.arcade.moveToObject(this.cop4, player, 10000, 1000);
      }
      if (Math.abs(player.x - this.dog.x) <= 200 && Math.abs(player.y - this.cop4.y) <= 200) {
        this.dogbark.play("", 0, 0.3, true )
      }


      // var dogOverlap = this.physics.arcade.overlap(player, this.dog, this.moveDog, null, this)

      var overlap = this.physics.arcade.overlap(player, this.cop, this.moveCop, null, this)
      var extrct = this.physics.arcade.overlap(player, extractLocation, this.dropOff, null, this)
      var heartOverlap = this.physics.arcade.overlap(player, this.heart, this.dropOffHeart, null, this)

      //  Reset the players velocity (movement)
      player.body.velocity.x = 0;
      player.body.velocity.y = 0;

      this.physics.arcade.moveToObject(this.dog, player, 5000, 1000);

      // console.log('FOOTSTEPSOUND', this.footStepSound, this);

/*
      var playFootSteps = function () {
        // debugger;
        console.log('%cplayFootSteps', 'font-size: 14pt; color: red;', this.footStepSound, this);
        this.footStepSound.play("", 0, 0.5, true );
      }.bind(this);

      var testPlayFootSteps = function (start) {
        if(start){
          console.log('in testPlayFootSteps', this.footstepsSoundTimer, this.footStepSound);
          if( this.footstepsSoundTimer == -1) {
            var sound = this.footStepSound;
            this.footstepsSoundTimer = setInterval(function () {
              playFootSteps();
            }, 500);
          }
        } else {
          //stop
          clearTimeout(this.footstepsSoundTimer);
          this.footstepsSoundTimer = -1;
          // console.log('clear sound timer', this.footstepsSoundTimer);
        }
      };
*/

      if (cursors.left.isDown) {
          //  Move to the left
          player.body.velocity.x = -250;
          player.animations.play('left');
      } else if (cursors.right.isDown) {
          //  Move to the right
          player.body.velocity.x = 250;
          player.animations.play('right');
      } else {
          //  Stand still
          player.animations.stop();
          player.frame = 4;
      }

      if (cursors.up.isDown) {
          player.body.velocity.y = -250;
      } else if (cursors.down.isDown) {
          player.body.velocity.y = 250;
      } else {
          //  Stand still
      }

      // Diagonal movement controller ///////////////////////////////////////////
      // if ( cursors.left.isDown && cursors.down.isDown ) {
      //   player.body.velocity.x = -550;
      //   player.body.velocity.y = 550;
      // } else if ( cursors.right.isDown && cursors.down.isDown ) {
      //   player.body.velocity.x = 550;
      //   player.body.velocity.y = 550;
      // } else if ( cursors.left.isDown && cursors.up.isDown ) {
      //   player.body.velocity.x = -550;
      //   player.body.velocity.y = -550;
      // } else if ( cursors.right.isDown && cursors.up.isDown ) {
      //   player.body.velocity.x = 550;
      //   player.body.velocity.y = -550;
      //   player.animations.play('upRight');
      // } else {
      //       //  Stand still
      //   player.animations.stop();
      //
      //   player.frame = 4;
      // }


      // Guard takeout action.
      if (overlap === true && s.isDown) {
          this.killCop();
      }

      if (extrct === true && x.isDown) {
        this.pressedV();
        // promptText2.text = "YOU GOT AWAY"
        Heist.levelScore += this.score;
        Heist.totalScore += this.score;
        this.paused = true;
        this.state.start('LevelOneSummary')
        this.state.add('LevelTwo', Heist.LevelTwo)

        // Capture time:
        //   var printTime = Math.round(this.time.totalElapsedSeconds());
        //   someVariable = printTime;
      }
      if (extrct === true && v.isDown) {
        if (this.playerCarryValue > 0 && this.maxWeight > 0) {
          this.printSecureMessage();
          this.pressedV();
          this.pause = this.time.now + 1200
        } else if (this.pause < this.time.now && this.score === maxPossibleScore) {
          this.getAll();
        } else if (this.pause < this.time.now && this.maxWeight === 0) {
          notificationText.text = "You don't have anything to secure."
          this.fadeText(notificationText)
          return;
        }
      }

      if (heartOverlap === true && b.isDown) {
        this.lasers.destroy();
        // this.heart.kill();
        notificationText.text = "You disabled all lasers."
        this.fadeText(notificationText)
        return;
        }

      if (g.isDown) {
        Heist.health -= 1
      }

      if (Heist.health < 1) {
        if ( Heist.playerLives === 0){
          this.state.add('Ded', Heist.Ded)
          this.state.start('Ded')

        } else {
          this.state.add('LevelOneRetry', Heist.LevelOneRetry)
          this.state.start('LevelOneRetry')
          Heist.playerLives -= 1
        }
      }
  },


  render: function () {

    var secondsElapsed = Math.round(this.time.totalElapsedSeconds());

      // var timeInSeconds = (Math.round(timeYay / 1000)).toString()
      var minutes = Math.round(secondsElapsed / 60);
      var seconds = Math.round(secondsElapsed % 60);

      // if (this.timer.running) {
      //   promptText2.text = Math.round(secondsElapsed)
      // }

      if (secondsElapsed < 10 ) {
        timeDisplay.text = "0:0" + secondsElapsed;
      } else if ( secondsElapsed < 60) {
        timeDisplay.text = "0:" + secondsElapsed;
      } else if ( secondsElapsed > 60 && seconds < 10) {
        timeDisplay.text = minutes + ":0" + seconds;
      } else if ( secondsElapsed > 60 && seconds >= 10) {
        timeDisplay.text = minutes + ":" + seconds;
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
    // Convert into seconds.
    this.minutes = "0" + Math.floor(s/ 60);
    this.seconds = "0" + Math.floor(s - minutes * 60);
    return this.minutes.substr(-2) + ":" + this.seconds.substr(-2)
  },
  dropOff: function(player, extract) {
    promptText.text = 'Press V to secure loot.';
    this.clearText(promptText);
  },

  dropOffHeart: function(player, extractHeart) {
    promptText.text = 'Press B to disable lasers.';
    this.clearText(promptText);
  },

  pressedV: function() {
    this.score += this.playerCarryValue;
    this.playerCarryValue = 0;
    this.maxWeight = 0;
    scoreText.text = '$' + this.score;
  },
  printSecureMessage: function () {
    this.fadeText(notificationText)
    notificationText.text = "You secured $" + this.playerCarryValue
  },

  collectStar: function (player, star) {
    if (this.maxWeight <= 11) {
      this.maxWeight += 1;
      console.log(this.maxWeight);
      // Removes the star from the screen
      star.kill();

      this.playerCarryValue += 1000;
      this.fadeText(promptText);
      promptText.text = '+$1000'
      this.getAll();
    } else {
      this.fadeText(notificationText);
      notificationText.text = 'You are already carrying too much.'
      return;
    }

  },

  collectDiamond: function(player, diamond) {
    if (this.maxWeight <= 10) {
      this.maxWeight += 2;
      console.log(this.maxWeight);
      // Removes the diamond from the screen
      diamond.kill();

      this.playerCarryValue += 5000
      this.fadeText(promptText);
      promptText.text = '+$5000'
      this.getAll();
    } else {
      this.fadeText(notificationText);
      notificationText.text = 'You are already carrying too much.'
      return;
    }
  },

  collectMoney: function(player, money) {
    if (this.maxWeight <= 11) {
      this.maxWeight += 1;
      money.kill();

      this.playerCarryValue += 10000
      this.fadeText(promptText);
      promptText.text = '+$10000'
      this.getAll();
    } else {
      this.fadeText(notificationText);
      notificationText.text = 'You are already carrying too much.'
      return;
    }
  },

  collectGold: function(player, gold) {
    if (this.maxWeight <= 9) {
      this.maxWeight += 3;
      gold.kill();

      this.playerCarryValue += 50000
      this.fadeText(promptText);
      promptText.text = '+$50000'
      this.getAll();
    } else {
      this.fadeText(notificationText);
      notificationText.text = 'You are already carrying too much.'
      return;
    }
  },
  createBadGuy: function(x, y) {
    // this.badguy.create(x, y, 'guard');
  },

  killCop: function(player, cop) {
      // Removes the cop from the screen
      this.cop.kill();

      //  Add and update the score
      this.fadeText(promptText);
      promptText.text = 'Take that you police scum!';
      // this.getAll();
  },
  moveCop: function(player, cop) {

    // Removes the cop from the screen
    this.cop.animations.play('walk', 8, true)

    //  Add and update the score
    this.fadeText(promptText);
    promptText.text = 'He is gonna get ya!';
    // this.getAll();
  },


  dogHitWallInner: function(dog, innerWall){
    // console.log('dogHitWallInner', dog.body.velocity);
    //dog.body.velocity,setTo(200, 200);
    // dog.body.velocity.x *= -1;
    // dog.body.bounce.setTo(1,0);
    dog.anchor.setTo(0.5, 1);

  },

  dogHitWallOuter: function(dog, outerWall){
    // console.log('dogHitWallOuter', dog.body.velocity, dog, outerWall);
    dog.anchor.setTo(0.5, 1);
    //dog.body.velocity.x *= -1;
    // dog.body.velocity.setTo(200, 200);
    // dog.body.bounce.setTo(1,0);
  },

  moveDog: function (dog) {
    this.dog.animations.play('left');
  },

  fadeText: function(textName) {
    textName.alpha = 0;
    this.add.tween(textName).from( { alpha: 1 }, 500, Phaser.Easing.easeOut, true, 800);
  },

  clearText: function(textName) {
    textName.alpha = 0;
    this.add.tween(textName).from( { alpha: 1 }, 200, Phaser.Easing.default, true, 100);
  },

   timeOut: function () {
    promptText.alpha = 1;
    promptText.text = "TIME UP!";
  },
  getAll: function() {
    if (this.score === maxPossibleScore) {
        promptText.text = "You've collected all the loot, now get out!"
        this.fadeText(promptText);
      }
  },

  killLasers: function(player, lasers) {
    console.log('this should kill lasers');
  //  this.paths.kill();
  },

  heartPrompt: function(player, heart) {
    console.log('you are over the heart');
  },
  getHurtBoi: function() {
    Heist.health -= 1;
    console.log(Heist.health);
  }


}; // End of LevelOne
