// try {
//     aleert("hello");
// } 
// catch (err) {
//     document.getElementById("test").innerHTML = err.message;
// }


function onClickFunc() {

    var msg, x;

    msg = document.getElementById("msg");
    msg.innerHTML = "";

    x = document.getElementById("some").value;
    try {
        if (x == "") throw "Please enter the number";
        if (isNaN(x)) throw "Please enter the number only";
        if (x < 4) throw "Number must be greater than 3";
    } catch (err) {
        msg.innerHTML = "The error is " + err;
    } finally {
        document.getElementById("some").value = "";
    }
}