var Bowling = function(){

  this.frame = 1

};

Bowling.prototype.rollOne = function(number){
  return number
};

Bowling.prototype.rollTwo = function(number){
  return number
};

Bowling.prototype.frameScore = function(rollOne, rollTwo){
  this.frame += 1
  return rollOne + rollTwo
};
