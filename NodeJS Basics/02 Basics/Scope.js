let iAmGlobal = "someValue";

if (true) {
  let iAmLocal = "someMoreValue";
  iAmGlobal = "Superman";
  console.log(iAmGlobal);
  console.log(iAmLocal);
}

console.log(iAmGlobal);
