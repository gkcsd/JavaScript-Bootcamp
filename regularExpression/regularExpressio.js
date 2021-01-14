var str = "Apple apple APPLE AppLE AppLe aPPLE";
var txt = str.replace(/([A-Z])\w+/ig,"google");

document.getElementById("test").innerHTML = txt;