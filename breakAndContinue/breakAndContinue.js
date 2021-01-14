
var greeting = "";
var myScore = 450;
var highScore = 500;

var harley = ["Name", "Raj", "Bag", "Spoon"];

var i;
for (i = 0; i < 16; i++) {
    // if (i == 10) { break;}
    if (i ==10) {continue;}
    greeting += i + "<br>";
}

document.getElementById("test").innerHTML = greeting;