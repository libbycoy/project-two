var Heist = {
  //Global variables that persist regardless of state swaps
  totalScore: 0, playerLives: 3, levelScore: 0, userName: "Player", health: 10
};

Heist.Boot = function(game) {};

Heist.Boot.prototype = {
  create: function(){

    this.state.start('Preloader')

  }

};
