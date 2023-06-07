document.getElementById("lefteye").style.backgroundColor = "purple";
document.getElementById("head").style.transform = "rotate(15deg)";

//Put a 2-pixel-wide, solid black border around his body.
document.getElementById("body").style.border = "15px black solid"
//Round the corners of his mouth.
document.getElementById("mouth").style.borderRadius = "4px";
// Put yellow dots around his eye.
document.getElementById("righteye").style.border = "15px yellow dotted";
// Change his left arm's colour.
document.getElementById("leftarm").style.backgroundColor = "#FF00FF";
// Change the text colour.
document.getElementById("body").style.color = "#FF0000";
// Give Douglas hair.
document.getElementById("head").style.borderTop = ("5px black solid");
// Tilt Douglas's head to the other side.
document.getElementById("head").style.transform = "rotate(345deg)";
// Make his nose round.
document.getElementById("nose").style.borderRadius = "500px";
// Make Douglas's right arm green.
document.getElementById("rightarm").style.backgroundColor = "#00FF00";
// Make his lips pink/
document.getElementById("mouth").style.backgroundColor ="pink"

var righteye = document.getElementById("righteye");
var lefteye = document.getElementById("lefteye");
var leftarm = document.getElementById("leftarm");


righteye.addEventListener("click", moveUpDown);
lefteye.addEventListener("click", moveUpDown2);
leftarm.addEventListener("click",moveRightLeft);


function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0
    var animation = setInterval(frame, 100);


    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(animation);
        }
    }
}

function moveUpDown2(e) {
    var robotPart = e.target;
    var top = 0;
    var animation = setInterval(frame, 100);

    function frame() {
        robotPart.style.top = top + "%";
        top++;
        if (top === 20) {
            clearInterval(animation);
        }
    }
}

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10); //Draw every 10ms

    function frame() {
        robotPart.style.left = left + "%";
        left++;
        if (left === 70) {
            clearInterval(id);
        }
    }
}




    





