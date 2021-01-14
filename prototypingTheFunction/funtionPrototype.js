var walk = function () {
    return (
        "They can be able to walk"
    )
}

var SuperHero = function () {
    var power, villian;
}


SuperHero.prototype.walk = walk;


peterParker = new SuperHero();
peterParker.power = "AirSwing";
peterParker.villian = "Black Pod";

//
console.log(peterParker.walk());
//


console.log(peterParker.power);
console.log(peterParker.villian);

kent = new SuperHero();
kent.power = "Fly";
kent.villian = "General Zord";

console.log(kent.power);
console.log(kent.villian);