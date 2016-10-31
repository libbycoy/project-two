Heist.Preloader = function (game) {
  this.background = null;

};

Heist.Preloader.prototype = {
  preload: function () {
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
        game.load.image('guard', 'assets/baddie.png')
        game.load.image('background', 'assets/phaser_background-02.png');
        game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
        game.load.spritesheet('button', 'assets/number-buttons-90x90.png', 90, 90);
  },
  create: function() {
    this.state.start('MainMenu')
  },

  update: function() {

  }


};
