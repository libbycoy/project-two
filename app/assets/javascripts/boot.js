var Heist = {
  //Global variables that persist regardless of state swaps
  totalScore: 0
};

Heist.Boot = function(game) {};

Heist.Boot.prototype = {
  create: function(){

    this.state.start('Preloader')

  }

};
