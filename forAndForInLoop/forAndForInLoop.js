
var highScore = 500;
var myScore = 450;
var greeting = "";

var harley = ["Ganesh", "Kale", "I", "Am", "Software", "Engineer"];

var i;
// for (i = 0; i < harley.length; i++) {
//     greeting += harley[i] + "<br>";
// }

for (i in harley) {
    greeting += harley[i] + "<br>";
}
document.getElementById("test").innerHTML = greeting;