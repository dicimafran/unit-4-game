
/* Game start conditions
    Output
        RNG computer number pre-generated with range from 19-120
    
    Input
        clicking on crystals

    Process
        Each click generates random number 1-12
*/


$(document).ready(function() {

var randNumber = ""; 

// General RNG function
    function rngTime (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    randNumber= console.log (rngTime(19, 120)
/*
// Beginning conditions
    function gameStart() {
        compNumber()
        console.log(randNumber)
    }


//Input
    $("#red").click(function() {
        console.log("Ye clicked me.");
    });

    

*/

});