let s = prompt("Enter String");

s = s.toString().toUpperCase();
console.log(s);
//let c=0;
let c1=0;
for (var i = 0;i<s.length ; i++) {
    if (( s[i]== "A" || s[i] == "E" || s[i] == "I" || s[i]== "O" || s[i] == "U")) {
      //c++;
    }

    else {
     c1++;

    }
}
//console.log(c);
console.log(c1);