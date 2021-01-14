var greeting = "";
var myScore = 450;
var highScore = 500;

var harley = ["Name", "Last Name", "Middle Name", "Can i get your number"];

function celToFarnTemp(celsius) {
    return ((9/5)*celsius + 32);
}

document.getElementById("test").innerHTML = celToFarnTemp(100);