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
  if(rollOne === 10){
    this.scorecard.push("Strike!");
    this.frame += 1;
    return "Strike!";
  } else {
    this.scorecard.push(rollOne + rollTwo)
    this.frame += 1
      if(this.scorecard[this.scorecard.length-2] === "Strike!"){
        this.scorecard[this.scorecard.length-2] = 10 + rollOne + rollTwo
      }
    return rollOne + rollTwo
  };
};
