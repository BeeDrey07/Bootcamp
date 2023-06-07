/*
todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/
var trainSpeed = 250;
var trainPosition = 0;
var animation;
/*
todo: Listen for click events on the train element and 
call a function named speedUp when they happen.
*/
/*
todo: Listen for click events on the stop button element 
and call a function called stopTrain when they 
happen.
*/
var train = document.getElementById("train");
train.addEventListener("click", speedUp)
/*
todo: Check whether the train is already going as fast 
as it can. If not, increase the speed.
*/

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

function speedUp() {
    if (trainSpeed > 10) {
        trainSpeed -= 10;
        clearInterval(animation);
        animation = setInterval(frame, trainSpeed);
    }

    /*
    If the train is already moving, stop it and then 
    restart with the new speed by calling a 
    function called frame.
    */
    // clearInterval(animation);
    // animation = setInterval(frame, trainSpeed);

    function frame() {
        /*
        todo: Reposition the train and check whether the 
       train is crashed.
        */
        trainPosition += 2;
        train.style.left = trainPosition + "px";
        checkPosition(trainPosition);
    }
}
function stopTrain() {
    /*
    todo: Test whether the train is already crashed. If 
   not, stop the train.
    */
    if (trainPosition < 260) {
        clearInterval(animation);
    } 
}
function checkPosition(currentPosition) {
    /*
    todo: Check the train's current position and crash it 
   if it's at the end of the line.
    */
    if (currentPosition === 260) {
        alert("Crash!");
        clearInterval(animation);
    }
}
