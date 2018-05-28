
/* Game start conditions
    Output
        RNG computer number pre-generated with range from 19-120
    
    Input
        clicking on crystals

    Process
        Each click generates random number 1-12
*/

// Variables
    var userScore= 0;
    var wins= 0;
    var losses= 0;

// That document.ready thing to make the page load first.
    $(document).ready(function() {

//General functions
    function rngTime(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }  

// General RNG function followed by sub-RNGs
    
    // Random Number RNG
    var randNumber = rngTime(19, 120); 
    $("#randNumber").html(randNumber)
    
    function randomNumberGet() {
        var randNumber = rngTime(19, 120); 
        $("#randNumber").html(randNumber)
    }
  

    // Crystal RNG function and userscore
        $("img").click(function() {
            cp= rngTime(1, 12)
            console.log("The cp is "+ cp)
            userScore= userScore + cp
            $("#userScore").html(userScore)

    // Win and lose conditions
            
        if (randNumber == userScore) {
            wins= wins+= 1;
            console.log(wins)
            $("#winTally").html(wins)
            userScore = 0;
            $("#userScore").html(userScore)
            randomNumberGet();
        }

        if (userScore > randNumber) {
            losses= losses+= 1;
            console.log(losses)
            $("#loseTally").html(losses)
            userScore = 0;
            $("#userScore").html(userScore)
            randomNumberGet();
        }
            
        });

});