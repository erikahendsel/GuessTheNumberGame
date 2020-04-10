 //Apperantly, the number will keep randomizing inside the function
// Because if you declare the variable within a function, it is only visible within that function. 
// Hint: https://stackoverflow.com/questions/18167823/why-does-the-math-random-keep-updating-onclick
var savedRandomNumber;
function randomNumberGenerator() {
    var x = Math.floor((Math.random() * 10) + 1);
    document.getElementById("random_number").innerHTML = x;
    var parsedX = parseInt(x);
    savedRandomNumber = parsedX;
    return parsedX;
}

function getPlayerName(){
    var player_name = document.getElementById('player_name').value;
    document.getElementById("display_player_name").innerHTML = 'Welcome ' + player_name + ' let\'s play "Guess the number"';
    return player_name;
}

var counter = 5; //counter has to be outside of the function. Why? Because if the variable is set inside the function, it will constantly reset to original value. Function runs everytime the button is pressed. Therefore variable also sets its value back to original
function getUserNumber(){
    var getUserNumber = document.getElementById('getPlayerNumber').value;
    console.log(getUserNumber);
    var parsedNumber = parseInt(getUserNumber);
    globalUserNumber = parsedNumber;
    // return parsedNumber;
    // document.getElementById('saved_number').innerHTML = savedRandomNumber;
    

    // if(parsedNumber === savedRandomNumber) {
    //     var s = document.getElementById("resultText").innerHTML = "You won!";
    //     console.log(s);
    // }
    // else {
    //     var d = document.getElementById("resultText").innerHTML = "Try again!";
    //     console.log(d);
    // }

    // var globalTries = 3;
    // var empty2;
    // console.log("2nd empty string "+empty2);
    if(parsedNumber !== savedRandomNumber){
        if(counter > 1) {
            counter -= 1;
            document.getElementById('text_field').innerHTML = "Wrong, try again. Number of tries left " + counter;
        }
        else {
            document.getElementById('text_field').innerHTML = "Sorry, no tries left :C" + counter;
        }
    }
    else if(parsedNumber === savedRandomNumber && counter !== 1) {
        var s = document.getElementById("resultText").innerHTML = "You won!";
        console.log(s);
    }
    // else if(globalTries == 0) {
    //     document.getElementById('text_field').innerHTML = "Sorry, no tries left :C";
    // }

    // else {
    //     document.getElementById('text_field').innerHTML = "Try again";
    // }
}

// document.getElementById("getusernr").addEventListener("click");

// var maxTries = 5;
// while(maxTries > 0) {
//     document.getElementById("getusernr").addEventListener("click");
//     console.log("I looped");
//     if(globalUserNumber !== savedRandomNumber){
//         counter -= 1;
//     }
// }