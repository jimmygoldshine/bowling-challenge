
A Program for Scoring 10 Pin Bowling
=================


* Use the application to keep track of your game of bowling.
* The app will return a player's scorecard after each frame, and final score and scorecard at the end of the game.
* After each frame, the player's scorecard will be returned.

Set Up:
-----

* Fork this repo.
* Clone your own repo to your local machine.
* From the terminal, run open SpecRunner.html in your local repo.
* Open the console with ```Alt + Cmd + i```
* In the console, create a new game with the ```
game = new Bowling();
```
command.

Scoring:
-----
* In the console, use the command ```game.nextFrame(roll1, roll2);``` to score the first frame.
* Continue in the above way until you have completed 10 frames.

NOTE: On the 10th frame, if you score a strike, you gain two extra rolls. Use the ```game.nextFrame(roll1, roll2)``` to enter in the next two. However, if you achieve a strike on your first roll, leave roll2 blank. The game will treat your bonus roll as a frame so a strike causes another frame exist. Then use the ```game.nextFrame(roll1)``` command to score your second and final bonus roll.

#### Future Features

Create a nice interactive animated interface with jQuery.


# The Rules of 10-Pin Bowling

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
