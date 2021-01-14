// function incresHigScore(currentHighScore) {
//     var newHighScore = 2 * currentHighScore;
//     return newHighScore;
// }

// document.getElementById("test").innerHTML = incresHigScore(5);

// Another method to declare the variable -->

var incresHigScore = function (currentHighScore) {
    var newHighScore = 2 * currentHighScore;
    return newHighScore;
}(10);

//document.getElementById("test").innerHTML = incresHigScore(15);