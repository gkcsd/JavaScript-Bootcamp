if (true) {
  console.log("I am inside the if block");
  console.log("I am still inside the if block");
} else if (false) {
  console.log("I am inside the caps in block");
} else {
  console.log("I am inside the else block");
}

console.log();

let whoIsHere = "user";

if (whoIsHere === "user") {
  console.log("Greeting message for user");
  console.log("Allow access to user for all his courses");
} else if (whoIsHere === "Teacher") {
  console.log("Greeting message for Teacher");
  console.log("Allow access to Teacher");
} else {
  console.log("MESSAGE: Please verify yourself");
  console.log("Please open an email account");
}
