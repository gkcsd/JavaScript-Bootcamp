
var greeting = "";
var myScore = 450;
var highScore = 500;

var harley = {
    firstName: "Street",
    lastName: "450",
    ccOfBike: "300cc",
    weight: "320",
    color: "Black",

    fullName: function() {
        return this.firstName + "-" + this.lastName;
    }

}

document.getElementById("test").innerHTML = harley.fullName();