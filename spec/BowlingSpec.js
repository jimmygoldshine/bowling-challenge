describe("Bowling", function(){

  var bowling;

  describe("when no strikes or spares:", function(){

    beforeEach(function(){
      bowling = new Bowling();
    });

    it("should score the sum of roll 1 and 2 - no specials", function(){
      expect(bowling.nextFrame(3, 6)).toEqual([9])
      expect(bowling.scorecard).toEqual([9])
      expect(bowling.frame).toEqual(2)
    });

    it("should keep keep count of the frame number", function(){
      bowling.nextFrame(bowling.rollOne(3), bowling.rollTwo(6));
      bowling.nextFrame(bowling.rollOne(1), bowling.rollTwo(6));
      bowling.nextFrame(bowling.rollOne(4), bowling.rollTwo(4));
      expect(bowling.frame).toEqual(4);
      expect(bowling.scorecard).toEqual([9,7,8])
    });

  });

  describe("when a strike is scored", function(){

    beforeEach(function(){
      bowling = new Bowling();
    });

    it("should move to next frame if rollOne is a strike", function(){
      bowling.nextFrame(10);
      expect(bowling.scorecard).toEqual(["Strike!"]);
      expect(bowling.frame).toEqual(2)
    });

    it("should add the bonus two subsequent rolls to the previous strike - no more specials", function(){
      bowling.nextFrame(10);
      bowling.nextFrame(8,1);
      expect(bowling.scorecard).toEqual([19,9])
    });

    it("should add the bonus two subsequent rolls - two strikes", function(){
      bowling.nextFrame(10);
      bowling.nextFrame(10);
      bowling.nextFrame(10);
      expect(bowling.scorecard).toEqual([30, "Strike!", "Strike!"]);
    });

    it("should add the bonus two subsequent rolls - one strike, one non-strike", function(){
      bowling.nextFrame(10);
      bowling.nextFrame(10);
      bowling.nextFrame(10);
      bowling.nextFrame(6, 2);
      expect(bowling.scorecard).toEqual([30, 26, 18, 8]);
    });

  });

  describe("when a spare is scored", function(){

    beforeEach(function(){
      bowling = new Bowling()
    });

    it("should declare a spare when 10 is scored in a frame over 2 rolls", function(){
      bowling.nextFrame(9,1);
      expect(bowling.scorecard).toEqual(["Spare!"])
    });

    it("should add the bonus off the next one roll onto frame score", function(){
      bowling.nextFrame(9, 1);
      bowling.nextFrame(5, 3);
      expect(bowling.scorecard).toEqual([15, 8])
    });

  });

  describe("It should raise an error if:", function(){

    beforeEach(function(){
      bowling = new Bowling()
    });

    it("roll one has a score of greater than 10", function(){
      expect(function() {bowling.nextFrame(11)}).toThrowError("Invalid score: Any one roll cannot exceed 10")
    });

    it("roll two has a score of greater than 10", function(){
      expect(function() {bowling.nextFrame(0, 11)}).toThrowError("Invalid score: Any one roll cannot exceed 10")
    });

    it("frame score exceeds 10", function(){
      expect(function() {bowling.nextFrame(8, 3)}).toThrowError("Invalid score: Frame score cannot exceed 10")
    });

  });

});
