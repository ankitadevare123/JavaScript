let n = parseInt(prompt("Enter the number of rounnds played by both Tom and Jerry?"));
let inputarray = [];
let tom = 0;
let jerry=0;
for (var i = 0; i < n; i++) {
    inputarray[i] = prompt("Number of round won by tom and jerry (input 1 and 0 respectively) " + (i + 1));
}
alert(inputarray);

for (i = 0; i < inputarray.length; i++) {
    if (inputarray[i] == 1) {
        tom++;
    }

    else{
        jerry++;
    }
   
}
if(tom>jerry){
    alert("Tom win");
}
else if(tom<jerry){
    alert("Jerry win");
}
else{
    alert("Play another Game");
}
