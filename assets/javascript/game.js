
/* Game start conditions
    Output
        RNG computer number pre-generated with range from 19-120
    
    Input
        clicking on crystals

    Process
        Each click generates random number 1-12
*/

// Global Variables
    var userScore= 0;
    var wins= 0;
    var losses= 0;
    var randNumber = 0;

// That document.ready thing to make the page load first.
    $(document).ready(function() {

//General functions
    // RNG template
    function rngTime(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }  

    // Random number function
    function randomNumberGet() {
        randNumber = rngTime(19, 120); 
        $("#randNumber").html(randNumber)
    }

    randomNumberGet();
  
// The meat of the game.
    // Crystal RNG function and userscore updates with each click. Also, cp means crystal points.
        $("img").click(function() {
            console.log ("The random number is " + randNumber)
            cp= rngTime(1, 12)
            console.log("The cp is "+ cp)
            userScore= userScore + cp
            console.log("The userscore is " + userScore)
            $("#userScore").html(userScore)

    // Win and lose conditions with resets to userscore and random number.
            
        if (randNumber == userScore) {
            wins= wins+= 1;
            console.log("You won "+ wins + " time(s)")
            $("#winTally").html(wins)
            userScore = 0;
            $("#userScore").html(userScore)
            randomNumberGet();
        }

        if (userScore > randNumber) {
            losses= losses+= 1;
            console.log("You lost " + losses + " time(s)")
            $("#loseTally").html(losses)
            userScore = 0;
            $("#userScore").html(userScore)
            randomNumberGet();
        }
            
        });

});