let isVerified = true;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if (isVerified && isLoggedIn && hasPaymentToken) {
  console.log("Greeting for user");
  console.log("Allow access to paid courses");
} else if (isVerified || isGuest) {
  console.log("Allow access to free preview");
} else {
  console.log("MESSAGE: Please contact to Admin");
}
