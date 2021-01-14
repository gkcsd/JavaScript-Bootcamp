
var myScore = 1;
var highScore = 10;
var greeting = "";

switch(myScore) {
    case 0:
        greeting = "Sunday: Rest";
        break;
    case 1:
        greeting = "Monday: Go to work";
        break;
    case 2:
        greeting = "Tuesday: Running";
        break;
    case 3:
        greeting = "Wednesday: Exercise";
        break;
    case 4:
        greeting = "Thursday: Hello";
        break;
    case 5:
        greeting = "Friday: BYE";
        break;
    case 6:
        greeting = "Saturday: Personal";
    default:
        greeting = "Hey Hey What are you sending me..";
        break;
}

document.getElementById("test").innerHTML = greeting;