var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
var d = new Date();
d.getDate();

// call the displayDate() function
displayDate();

function displayDate() {
    // todo: display the current date in the todaysdate div
    todayDate.innerHTML = d;
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    var dayOfWeek = d.getDay();
    var youShould;
    switch (dayOfWeek) {
        case 0:
            youShould = "Take it easy! You have earned it!";
            break;
        case 1:
            youShould = " You should visit your friend!";
            break;
        case 2:
            youShould = "You should do groceryshopping";
            break;
        case 3:
            youShould = "You should buy a new car!";
            break;
        case 4:
            youShould = "You should send a msg to Masoud Sobani!";
            break;
        case 5:
            youShould = "You should call Masoud Sobani!!";
            break;
        case 6:
            youShould = "You should visit Masoud Sobani!!!!!";
            break;
        default:
            youShould = "Hmmm. Something is going wrong...";
            break;
    }
    document.getElementById("thingToDo").innerHTML = youShould
    // todo: find out the day of the week.

    /* todo: set a variable, called youShould, with a different
       string based on what day of the week it is. */

    // todo: output the value of youShould into the thingToDo div
}