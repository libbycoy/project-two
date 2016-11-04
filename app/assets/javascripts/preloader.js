var Heist = Heist || {};


Heist.Preloader = function (game) {
  this.background = null;

};

Heist.Preloader.prototype = {

  preload: function () {
        this.load.image('background', 'assets/phaser_background-02.png');
        this.load.image('background-02', 'assets/cement-06.png');
        this.load.image('opacity', 'assets/opacity-02.png');
        this.load.image('levelOneBackground', 'assets/menu-back-02.png');
        this.load.image('levelTwoBackground', 'assets/menu-back-03.png');
        this.load.image('key-02', 'assets/key-01.png');
        this.load.image('key', 'assets/key_blue-02.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('money', 'assets/money.png');
        this.load.image('gold', 'assets/gold.png');
        this.load.image('firstaid', 'assets/bluecars-03.png', 32, 48);
        this.load.image('background', 'assets/phaser_background-02.png');
        this.load.spritesheet('guard', 'assets/baddie.png', 32, 32, 4);
        this.load.spritesheet('dude', 'assets/updated_man.png', 52, 55);
        this.load.spritesheet('button', 'assets/start_button-05.png', 193, 81);
        this.load.spritesheet('button-02', 'assets/tutorial_button-04.png', 193, 81);
        this.load.spritesheet('button-03', 'assets/button-05.png', 193, 81);
        this.load.spritesheet('button-04', 'assets/play-again-05.png', 193, 81);
        this.load.image('outerWall', 'assets/walls/outer-wall-block.png');
        this.load.image('innerWall', 'assets/walls/inner-wall-block.png');
        this.load.image('laser', 'assets/line-02.png');
        this.load.image('hLaser', 'assets/laser-01.png');
        this.load.image('heart', 'assets/heart.png');
        this.load.spritesheet('cop', 'assets/sec_guard.png', 60, 80, 4);
        this.load.spritesheet('mummy', 'assets/71e-01.png', 107, 70, 5);
        this.load.spritesheet('guardDog', 'assets/guard-dog-sprite.png', 60, 48);
        this.load.spritesheet('police', 'assets/redcars.png',  107, 70, 5);
        this.load.spritesheet('redCar', 'assets/redcars-03.png');

  },

  create: function() {
    this.state.start('MainMenu')
  },

  update: function() {

  }


};
