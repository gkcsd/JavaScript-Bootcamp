function increaseHighScore(currentHighScore) {
    var newHighScore = 2 * currentHighScore;
    return newHighScore;
}

console.log(increaseHighScore(10));

var increaseHighScore = function (currentHighScore) {
    return (
        console.log(2 * currentHighScore)
        //console.log(this),
        //console.log(arguments)
    )
}(8);