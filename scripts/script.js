var x = Math.floor((Math.random() * 10) + 1); //Apperantly, the number will keep randomizing inside the function
// Because if you declare the variable within a function, it is only visible within that function. 
// Hint: https://stackoverflow.com/questions/18167823/why-does-the-math-random-keep-updating-onclick
function randomNumberGenerator() {
    document.getElementById("random_number").innerHTML = x;
    var parsedX = parseInt(x);
    return parsedX;
}

function getPlayerName(){
    var player_name = document.getElementById('player_name').value;
    document.getElementById("display_player_name").innerHTML = 'Welcome ' + player_name + ' let\'s play "Guess the number"';
    return player_name;
}

function getUserNumber(){
    var getUserNumber = document.getElementById('getPlayerNumber').value;
    console.log(getUserNumber);
    var parsedNumber = parseInt(getUserNumber);
    

    if(parsedNumber === randomNumberGenerator()) {
        var s = document.getElementById("resultText").innerHTML = "You won!";
        console.log(s);
    }
    else {
        var d = document.getElementById("resultText").innerHTML = "Try again!";
        console.log(d);
    }
}