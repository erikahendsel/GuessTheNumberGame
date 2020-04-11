 //Apperantly, the number will keep randomizing inside the function
// Because if you declare the variable within a function, it is only visible within that function. 
// Hint: https://stackoverflow.com/questions/18167823/why-does-the-math-random-keep-updating-onclick
var savedRandomNumber;
function randomNumberGenerator() {
    var x = Math.floor((Math.random() * 20) + 1);
    console.log(x);
    var parsedX = parseInt(x);
    savedRandomNumber = parsedX;

    var show_guess_the_number_field = document.getElementById("guess_the_number_field");
    show_guess_the_number_field.style.display = "block";

    var hide_name_input_after_inserting_name = document.getElementById("after_player_name");
    hide_name_input_after_inserting_name.style.display = "none";

    return parsedX;
}

function getPlayerName(){
    var player_name = document.getElementById('player_name').value;
    document.getElementById("display_player_name").innerHTML = 'Welcome ' + player_name + '!' + ' Let\'s play "Guess the number"';

    var show_content_after_inserting_name = document.getElementById("after_player_name");
    show_content_after_inserting_name.style.display = "block";

    var hide_name_input_after_inserting_name = document.getElementById("namefield");
    hide_name_input_after_inserting_name.style.display = "none";

    return player_name;
}
var counter = 5; //counter has to be outside of the function. Why? Because if the variable is set inside the function, it will constantly reset to original value. Function runs everytime the button is pressed. Therefore variable also sets its value back to original
function getUserNumber(){
    var getUserNumber = document.getElementById('getPlayerNumber').value;
    console.log(getUserNumber);
    var parsedNumber = parseInt(getUserNumber);
    globalUserNumber = parsedNumber;

    if(parsedNumber !== savedRandomNumber && getUserNumber !== "" && getUserNumber < 21 && getUserNumber > 0){
        if(counter > 0) {
            counter -= 1;
            console.log("counter: " + counter)
            document.getElementById('text_field').innerHTML = "Wrong, try again. Number of tries left " + counter;
            if( parsedNumber > savedRandomNumber && counter !== 0) {
                document.getElementById('text_field').innerHTML = "Wrong, the number is SMALLER. Number of tries left: " + counter;
            }
            else if(parsedNumber < savedRandomNumber && counter !== 0) {
                document.getElementById('text_field').innerHTML = "Wrong, the number is BIGGER. Number of tries left: " + counter;
            }
            else if(counter === 0) {
                document.getElementById('text_field').innerHTML = "Sorry, no tries left." + " The number was  " + savedRandomNumber;

                var show_play_againBtn = document.getElementById("play_again_field");
                show_play_againBtn.style.display = "block";
            }
        }
        else {
            document.getElementById('text_field').innerHTML = "No tries left. Play again?";
                           var show_play_againBtn = document.getElementById("play_again_field");
                show_play_againBtn.style.display = "block";
        }
    }
    else if(getUserNumber == "") {
        document.getElementById('text_field').innerHTML = "You did not enter a number";
    }
    else if(getUserNumber > 21) {
        document.getElementById('text_field').innerHTML = "Max number is 20";
    }
    else if(getUserNumber <= 0) {
        document.getElementById('text_field').innerHTML = "Minimum number is 1";
    }
    else if(parsedNumber === savedRandomNumber && counter !== 0) {
        var s = document.getElementById("text_field").innerHTML = "You won!";
        console.log(s);
        document.getElementById("getusernr").disabled = true;

        var show_play_againBtn = document.getElementById("play_again_field");
        show_play_againBtn.style.display = "block";
    }
}

function playAgain() {
    location.reload();
}


// Enter input value on keypress
var player_name_enter_key_press = document.getElementById("player_name");
player_name_enter_key_press.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("get_player_name").click();
    }
});
var getusernr_enter_key_press = document.getElementById("getPlayerNumber");
getusernr_enter_key_press.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("getusernr").click();
    }
});
