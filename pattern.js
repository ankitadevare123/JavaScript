let n = prompt("Enter N");
let string = "";
for (var i = 0; i <= n; i++) {

    for (var k = 0; k < i; k++) {
        string = string + "\\";

        for (var m = 0; m < k; m++) {
            string = string + "//";
        }
    }
    for (var j = 0; j < n - 1; j++) {
        string = string + "  ";
    }


    string = string + "\n";
}
alert(string);