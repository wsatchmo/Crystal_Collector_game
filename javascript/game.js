var winCount = 0;
var lossCount = 0;
var blueRandom;
var redRandom;
var yellowRandom;
var multiRandom;
var scoreNum;
var goalNum;

function clearScore(){
    //reset wins and losses and display
    winCount = 0;
    lossCount = 0;
    $(".wins").text(winCount);
    $(".losses").text(lossCount);
    newGame();
}
$(".startgame").click(clearScore);

$(".bluecrystal").click(function(){
    //add to scorenum and display; check score against goal
    scoreNum += blueRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    //so it doesn't display NaN in score number
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
}); //repeat for other crystals
$(".redcrystal").click(function(){
    scoreNum += redRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".yellowcrystal").click(function(){
    scoreNum += yellowRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".multicrystal").click(function(){
    scoreNum += multiRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".blackcrystal").click(function(){
    scoreNum += blackRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});
$(".whitecrystal").click(function(){
    scoreNum -= whiteRandom;
    $(".scorenum").text(scoreNum);
    scoreCheck();
    if (isNaN(scoreNum)){
        $(".scorenum").text("Press Start");
    }
});

function newGame(){
    //set goal number and update it
    goalNum = Math.floor(Math.random() * 100) + 50;
    $(".goalnum").text(goalNum);
    //set score number and update it
    scoreNum = 0;
    $(".scorenum").text(scoreNum);
    //set crystal worths
    blueRandom = Math.floor(Math.random() * 3) + 3;
    redRandom = Math.floor(Math.random() * 7) + 5;
    yellowRandom = Math.floor(Math.random() * 7) + 7;
    multiRandom = Math.floor(Math.random() * 8) + 10;
    blackRandom = Math.floor(Math.random() * 40) + 2;
    whiteRandom = Math.floor(Math.random() * 5) + 7;
    //display on button
    $(".bluecrystal").text("Blue Crystal: " + blueRandom);
    $(".redcrystal").text("Red Crystal: " + redRandom);
    $(".yellowcrystal").text("Yellow Crystal: " + yellowRandom);
    $(".multicrystal").text("Multi Crystal: " + multiRandom);
    $(".whitecrystal").text("White Crystal: -" + whiteRandom);
}

function scoreCheck(){
    if (scoreNum === goalNum){
        //tell them they won
        $(".gamestat").text("Round Won!");
        //increase wins and display
        winCount++;
        $(".wins").text(winCount);
        //reset scoreNum
        scoreNum = 0;
        $(".scorenum").text(scoreNum);
        //start a new game
        newGame();
    } else if (scoreNum > goalNum){
        //tell them they lost
        $(".gamestat").text("Try Again!");
        //increase losses and display
        lossCount++;
        $(".losses").text(lossCount);
        //reset scoreNum
        scoreNum = 0;
        $(".scorenum").text(scoreNum);
        //start a new game
        newGame();
    }
}      
