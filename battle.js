let size = parseInt(prompt("Enter numbers"));
let inputarray = [];
let sum = 0;
let count = 0;
let add = 0;
for (var i = 0; i < size; i++) {
    inputarray[i] = parseInt(prompt("Enter numbers" + (i + 1)));
}

alert(inputarray);

for (i = 0; i < inputarray.length; i++) {
    if (inputarray[i] % 2 == 0) {
        sum = sum + inputarray[i];

    }

    else {
        add = add + inputarray[i];
    }


}
//console.log(`Addition of even numbers are:  ${sum}`);
//  console.log(`Addition of odd numbers are:  ${add}`);
if (sum > add) {
    alert("Even");
}
else {
    alert("odd");
}