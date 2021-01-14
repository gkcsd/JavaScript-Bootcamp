var greeting = "";
var myScore = 301;
var highScore = 450;

var harley = ["Name", "Surname", "Like", "Do Like"];

// var i = 0;
// while (i <= 9) {
//     greeting += "<br> The number is " + i;
//     i++;
// }

var i = 25;
do {
    greeting += "<br> The number is " + i;
    i++;
} while (i <= 9);

document.getElementById("test").innerHTML = greeting;