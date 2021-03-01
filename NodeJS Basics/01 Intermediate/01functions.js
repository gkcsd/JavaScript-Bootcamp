let sayHello = function(name) {
    console.log(`Greeting message for ${name}`);
    console.log(`Hey ${name}`);
}
sayHello("John");

console.log();

let fullNameMaker = function(firstName, lastName) {
    console.log("Wel-come to CodeBucket");
    console.log(`Happy to have you ${firstName} ${lastName}`);
}
fullNameMaker("John", "Doe");

console.log();

let Adder = function(num1, num2) {
    let Addition = num1 + num2;
    return Addition;
}
console.log(Adder(4,4));