var n = prompt("How many string you want to enter");
for (var i = 0; i < n; i++) {
    var nam = prompt("Enter String");

    let AN = /^[a-z0-9\-]+$/i;
    let alpha = /^[a-z\-]+$/i;
    let digit = /^[0-9\-]+$/i;

    if (alpha.test(nam)) {
        alert("Char");

    }
    else if (digit.test(nam)) {
        alert("Digit");
    }
    else if (AN.test(nam)) {
        alert("Alphanumeric");
    }

    else {
        alert("Combination of Char,digit,special symbol");

    }


}























/*
if(AN.test(a)){
alert("Alphanumeric");
}
else{
alert(" NOn alphanumeric")
}


if(alpha.test(a)){
alert("alphabet");
}
else{
alert(" non alphabet");
}


if(digit.test(a)){
alert("digit");
}
else{
alert(" non digit");
}
*/