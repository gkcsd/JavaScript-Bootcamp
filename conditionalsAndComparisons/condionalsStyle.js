
var greeting = "";
var highScore = 450;
var myScore = "450";

if (myScore > highScore) {
    greeting = "Oops You just missed the high Score";
} else if (myScore === highScore) {
    greeting = "Congratulation You matched the high Score";
} else {
    greeting = "Hurray You just got the high Score";
}

document.getElementById("test").innerHTML = greeting;