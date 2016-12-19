var Bowling = function(){

  this.scorecard = [];
  this.frame = 1
};

Bowling.prototype.rollOne = function(number){
  return number
};

Bowling.prototype.rollTwo = function(number){
  return number
};

Bowling.prototype.frameScore = function(rollOne, rollTwo = 0){
  this.scorecard.push(rollOne + rollTwo)
  this.frame += 1
  return rollOne + rollTwo
};
