var sampleString = 'Let\'s start our journey with javaScript';
console.log(sampleString.indexOf('start'));
console.log(sampleString.lastIndexOf('start'));
console.log(sampleString.slice(5, 11));

//substring(start, end) --> Substring can not accept negative index
//substr (start, length) --> Second parameters specifies the length of that part

console.log(sampleString.replace("journey", "adventure"));
console.log(sampleString.toUpperCase());
console.log(sampleString.toLowerCase());


var name1 = "Ajay";
var name2 = new String("Ajay");

if (name1 === name2) {
    console.log("It is true");
} else {
    console.log("It is false");
}