describe("Bowling", function(){

  var bowling;

  describe("first nine frames:", function(){

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

    it("should move to next frame if rollOne is a strike", function(){
      bowling.frameScore(bowling.rollOne(10));
      expect(bowling.scorecard).toEqual([10]);
      expect(bowling.frame).toEqual(2)
    });
  });

});
