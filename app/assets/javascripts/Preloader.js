var Heist = Heist || {};


Heist.Preloader = function (game) {
  this.background = null;

};

Heist.Preloader.prototype = {

  preload: function () {
        this.load.image('background', 'assets/cement-05.png');
        this.load.image('opacity', 'assets/opacity-02.png');
        this.load.image('levelOneBackground', 'assets/menu-back-02.png');
        this.load.image('levelTwoBackground', 'assets/menu-back-03.png');
        this.load.image('key', 'assets/key-01.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('money', 'assets/money.gif');
        this.load.image('diamond', 'assets/diamond.png');
        this.load.image('diamonds', 'assets/diamond.png');
        this.load.image('firstaid', 'assets/firstaid.png');
        this.load.image('background', 'assets/phaser_background-02.png');
        this.load.spritesheet('guard', 'assets/baddie.png', 32, 32, 4);
        this.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        this.load.spritesheet('button', 'assets/button_sprite_sheet.png', 193, 71);
        this.load.image('outerWall', 'assets/walls/outer-wall-block.png');
        this.load.image('innerWall', 'assets/walls/inner-wall-block.png');
        this.load.spritesheet('cop', 'assets/sec_guard.png', 60, 80, 4);
  },

  create: function() {
    this.state.start('MainMenu')
  },

  update: function() {

  }


};
