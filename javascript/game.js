var winCount = 0;
var lossCount = 0;

var running = false;

$(".startgame").click(function game(){
    //TELL IT TO ONLY RUN ONE INSTANCE AT A TIME
    if (running === true){
        console.log("Only one game instance at a time!");
        return;
    } else {
        running = true;

        var goalNum = Math.floor(Math.random() * 100) + 20;
        var scoreNum = 0;
            //show player random number between 20 - 120
        $(".goalnum").text(goalNum);
            //update scorenum
        $(".scorenum").text(scoreNum);
        $(".wins").text(winCount);
        $(".losses").text(lossCount);
            //RANDOM NUM GENERATORS :: give each cystal a random value between 1 - 12
        var blueRandom = Math.floor(Math.random() * 3) + 1;
        var redRandom = Math.floor(Math.random() * 8) + 3;
        var yellowRandom = Math.floor(Math.random() * 7) + 5;
        var multiRandom = Math.floor(Math.random() * 6) + 7;

            //whenever player clicks a crystal, add that value to the player's score / number
        $(".bluecrystal").click(function(){
            scoreNum += blueRandom;
            $(".scorenum").text(scoreNum);
            console.log("Scorenum is :" + scoreNum);
            console.log("goalnum is :" + goalNum);
            scoreCheck();
        });
        $(".redcrystal").click(function(){
            scoreNum += redRandom;
            $(".scorenum").text(scoreNum);
            console.log("Scorenum is :" + scoreNum);
            console.log("goalnum is :" + goalNum);
            scoreCheck();
        });
        $(".yellowcrystal").click(function(){
            scoreNum += yellowRandom;
            $(".scorenum").text(scoreNum);
            console.log("Scorenum is :" + scoreNum);
            console.log("goalnum is :" + goalNum);
            scoreCheck();
        });
        $(".multicrystal").click(function(){
            scoreNum += multiRandom;
            $(".scorenum").text(scoreNum);
            console.log("Scorenum is :" + scoreNum);
            console.log("goalnum is :" + goalNum);
            scoreCheck();
        });
        
            //compare their number to the number chosen at beginning
        function scoreCheck(){
                //if it matches, they win the round
            if (scoreNum === goalNum){
                $(".gamestat").text("Round Won!");
                winCount++;
                scoreNum = 0;
                $(".scorenum").text(scoreNum);
                game();
                //if it goes over, they lose the round
            } else if (scoreNum > goalNum){
                $(".gamestat").text("Try Again!");
                lossCount++;
                scoreNum = 0;
                $(".scorenum").text(scoreNum);
                running = true;
                game();
            }
            return;
                //if either of these are true start the game over
        }

    }
});