var doSomething = function (work) {
    console.log(work);
    console.log(this.benchPress);
}

doSomething("pushUps");

var exercise = {"benchPress": 4, "squts": 2};
doSomething.call(exercise, exercise.benchPress);
doSomething.apply(exercise, ['crunches']);










var multiplier = function() {
    var result = 1;
    for (var i = arguments.length - 1; i >= 0; i--) {
        result *= arguments[i];
    }
    return result;
}

console.log(multiplier(2,3,8));