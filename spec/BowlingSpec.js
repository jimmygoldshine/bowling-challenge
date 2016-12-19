describe("Bowling", function(){

  var bowling;

  describe("when no strikes or spares:", function(){

    beforeEach(function(){
      bowling = new Bowling();
    });

    it("should score the sum of roll 1 and 2 - no specials", function(){
      expect(bowling.frameScore(bowling.rollOne(3), bowling.rollTwo(6))).toEqual(9)
      expect(bowling.scorecard).toEqual([9])
      expect(bowling.frame).toEqual(2)
    });

    it("should keep keep count of the frame number", function(){
      bowling.frameScore(bowling.rollOne(3), bowling.rollTwo(6));
      bowling.frameScore(bowling.rollOne(1), bowling.rollTwo(6));
      bowling.frameScore(bowling.rollOne(4), bowling.rollTwo(4));
      expect(bowling.frame).toEqual(4);
      expect(bowling.scorecard).toEqual([9,7,8])
    });

  });

  describe("when a strike is scored", function(){

    beforeEach(function(){
      bowling = new Bowling();
    });

    it("should move to next frame if rollOne is a strike", function(){
      bowling.frameScore(bowling.rollOne(10));
      expect(bowling.scorecard).toEqual(["Strike!"]);
      expect(bowling.frame).toEqual(2)
    });

    it("should add the bonus two subsequent rolls to the previous strike - no more specials", function(){
      bowling.frameScore(bowling.rollOne(10));
      bowling.frameScore(bowling.rollOne(8), bowling.rollTwo(1));
      expect(bowling.scorecard).toEqual([19,9])
    });

    it("should add the bonus two subsequent rolls - two strikes", function(){
      bowling.frameScore(bowling.rollOne(10));
      bowling.frameScore(bowling.rollOne(10));
      bowling.frameScore(bowling.rollOne(10));
      expect(bowling.scorecard).toEqual([30, "Strike!", "Strike!"]);
    });

    it("should add the bonus two subsequent rolls - one strike, one non-strike", function(){
      bowling.frameScore(bowling.rollOne(10));
      bowling.frameScore(bowling.rollOne(10));
      bowling.frameScore(bowling.rollOne(10))
      bowling.frameScore(bowling.rollOne(6), bowling.rollTwo(2));
      expect(bowling.scorecard).toEqual([30, 26, 18, 8]);
    });

  });

});
