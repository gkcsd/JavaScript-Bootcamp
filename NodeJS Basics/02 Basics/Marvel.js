let superHeroes = ["Iron Man", "Spiderman", "Capt. America", "Thor"];

console.log(superHeroes);
console.log(superHeroes[2]);
console.log(superHeroes[superHeroes.length - 1]);

console.log(`There is ${superHeroes.length} Super Heroes`);

let Numbers = ["One", "Two", "Three", "Four", "Five", "Six"];

Numbers[1] = "Something";

console.log(Numbers);

console.log();
//Start
Numbers.shift();
console.log(Numbers);

Numbers.unshift("thisAdded");
console.log(Numbers);

console.log();
// End
Numbers.pop();
console.log(Numbers);

Numbers.push("Six");
console.log(Numbers);

console.log();
// Middle
Numbers.splice(2, 3, "MEAdded");
console.log(Numbers);
