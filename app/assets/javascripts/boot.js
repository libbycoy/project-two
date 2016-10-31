var Heist = {
  //Global variables that persist regardless of state swaps
  totalScore: 15, playerLives: 3
};

Heist.Boot = function(game) {};

Heist.Boot.prototype = {
  create: function(){

    this.state.start('Preloader')

  }

};
