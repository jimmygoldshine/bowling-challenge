var Bowling = function(){

  this.scorecard = [];
  this.frame = 1
  this.status = "In Progress"
};

Bowling.prototype.nextFrame = function(rollOne, rollTwo = null){
  errorChecks(rollOne, rollTwo, this.status);
  if(this.frame === 10){
    if(rollOne !== 10 && rollOne + rollTwo !== 10) {
      this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
      console.log("Your scorecard: " + this.scorecard);
      console.log("Your score: " + this.scorecard.reduce(function(a, b) {return a + b; }, 0));
      this.status = "Game Over!"
      return "Game Over!";
    } else {
      this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
      this.frame += 1
      return this.scorcard
    }
  } else if(this.frame === 11 && tenthFrameScore(this.scorecard) === "Spare!") {
    this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
    this.scorecard.pop();
    console.log("Your scorecard: " + this.scorecard);
    console.log("Your score: " + this.scorecard.reduce(function(a, b) {return a + b; }, 0));
    this.status = "Game Over!"
    return "Game Over!"
  } else if(this.frame === 11 && tenthFrameScore(this.scorecard) === "Strike!") {
     if(rollOne !== 10){
       this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
       this.scorecard.pop();
       console.log("Your scorecard: " + this.scorecard);
       console.log("Your score: " + this.scorecard.reduce(function(a, b) {return a + b; }, 0));
       this.status = "Game Over!"
       return "Game Over!"
     } else {
       this.frame += 1
       this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
       return "Strike!"
     }
   } else if(this.frame === 12){
       this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
       this.scorecard.pop();
       this.scorecard.pop();
       console.log("Your scorecard: " + this.scorecard);
       console.log("Your score: " + this.scorecard.reduce(function(a, b) {return a + b; }, 0));
       this.status = "Game Over!"
       return "Perfect Score!!!"
   } else {
    this.scorcard = frameScore(rollOne, rollTwo, this.scorecard)
    this.frame += 1
    return this.scorcard
  }
}

function frameScore(rollOne, rollTwo, scorecard){
  if(isStrike(rollOne)){
    scorecard.push("Strike!");
    scorcard = bonusCalculator(rollOne, rollTwo, scorecard);
    return scorcard;
  } else if(isSpare(rollOne, rollTwo)) {
    scorecard.push("Spare!");
    scorcard = bonusCalculator(rollOne, rollTwo, scorecard);
    return scorcard;
  } else {
    scorecard.push(rollOne + rollTwo)
    scorcard = bonusCalculator(rollOne, rollTwo, scorecard);
    return scorcard
    };
  }

  function bonusCalculator(rollOne, rollTwo = 0, scorecard) {
    if(werePreviousTwoFramesStrikes(scorecard)) {
      scorecard[scorecard.length - 3] = 20 + rollOne;
      if(wasPreviousFrameStrike(scorecard) && rollTwo !== null) {
        scorecard[scorecard.length - 2] = 10 + rollOne + rollTwo
      }}
      else if(wasPreviousFrameStrike(scorecard) && rollTwo !== null) {
        scorecard[scorecard.length - 2] = 10 + rollOne + rollTwo
      } else if(wasPreviousFrameSpare(scorecard)){
        scorecard[scorecard.length - 2] = 10 + rollOne
      }
      return scorecard
    };

function wasPreviousFrameStrike(scorecard) {
  return scorecard[scorecard.length - 2] === "Strike!"
};

function werePreviousTwoFramesStrikes(scorecard) {
  return scorecard[scorecard.length - 2] === "Strike!" && scorecard[scorecard.length - 3] === "Strike!"
};

function wasPreviousFrameSpare(scorecard) {
  return scorecard[scorecard.length - 2] === "Spare!"
};

function isStrike(rollOne) {
  return rollOne === 10
};

function isSpare(rollOne, rollTwo) {
  return rollOne + rollTwo === 10
};

function errorChecks(rollOne, rollTwo, status) {
  if(rollOne > 10) {
    throw new TypeError("Invalid score: Any one roll cannot exceed 10");
  } else if(rollTwo > 10) {
    throw new TypeError("Invalid score: Any one roll cannot exceed 10");
  } else if(rollOne + rollTwo > 10) {
    throw new TypeError("Invalid score: Frame score cannot exceed 10");
  } else if(status === "Game Over!"){
    throw new TypeError("Your game is over. Please start a new game!")
  }
};

function tenthFrameScore(scorecard) {
  if(scorecard[scorecard.length - 1] === "Spare!"){
    return "Spare!"
  } else {
    return "Strike!"
  }
};

function spareBonus(rollOne, scorecard){
  scorecard[scorecard.lenth - 1] = 10 + rollOne
  scorcard = bonusCalculator(rollOne, scorecard)
  return scorcard
};

function strikeBonus(rollOne, rollTwo, scorecard){
  if(rollOne === 10){
    scorecard[scorecard.lenth - 1] = 20
    scorecard = bonusCalculator(rollOne, rollTwo, scorecard);
    return scorecard
  } else {
    scorecard[scorecard.lenth - 1] = 10 + rollOne + rollTwo;
    scorecard = bonusCalculator(rollOne, rollTwo, scorecard);
    return scorecard
  }
};
