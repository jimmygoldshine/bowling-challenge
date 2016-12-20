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
  if(isStrike(rollOne)){
    this.scorecard.push("Strike!");
    this.frame += 1;
    this.scorcard = bonusCalculator(rollOne, rollTwo, this.scorecard);
    return "Strike!";
  } else if(isSpare(rollOne, rollTwo)) {
    this.scorecard.push("Spare!");
    this.frame += 1;
    this.scorcard = bonusCalculator(rollOne, rollTwo, this.scorecard);
    return "Spare!"
  } else {
    this.scorecard.push(rollOne + rollTwo)
    this.frame += 1
    this.scorcard = bonusCalculator(rollOne, rollTwo, this.scorecard);
    return rollOne + rollTwo
  };
}

  function wasPreviousFrameStrike(scorecard) {
    return scorecard[scorecard.length - 2] === "Strike!"
  };

  function werePreviousTwoFramesStrikes(scorecard) {
    return (scorecard[scorecard.length - 2] === "Strike!" && scorecard[scorecard.length - 3] === "Strike!")
  };

  function wasPreviousFrameSpare(scorecard) {
    return scorecard[scorecard.length - 2] === "Spare!"
  };

  function bonusCalculator(rollOne, rollTwo, scorecard) {
    if(werePreviousTwoFramesStrikes(scorecard)) {
      scorecard[scorecard.length - 3] = 20 + rollOne;
      if(wasPreviousFrameStrike(scorecard) && rollTwo !== 0) {
        scorecard[scorecard.length - 2] = 10 + rollOne + rollTwo
      }}
    else if(wasPreviousFrameStrike(scorecard) && rollTwo !== 0) {
      scorecard[scorecard.length - 2] = 10 + rollOne + rollTwo
    } else if(wasPreviousFrameSpare(scorecard)){
      scorecard[scorecard.length - 2] = 10 + rollOne
    }
    return scorecard
  };

  function isStrike(rollOne) {
    return rollOne === 10
  };

  function isSpare(rollOne, rollTwo) {
    return rollOne + rollTwo === 10
  };
