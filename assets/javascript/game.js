
/* Game start conditions
    Output
        RNG computer number pre-generated with range from 19-120
    
    Input
        clicking on crystals

    Process
        Each click generates random number 1-12
            
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

// Variables
    var randNumber = ""; 
    var userCrystals= "";



// That document.ready thing to make the page load first.
    $(document).ready(function() {

// General RNG function
    function rngTime(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }  
        // Random Number RNG
            $("#randNumber").html (console.log (rngTime(19, 120)))

        // Crystal RNG function
            $("img").click(function() {
                console.log (rngTime(1, 12))
            });






      
       

    

});