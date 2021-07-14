var str1 = 'hEllo';
var str2 = 'lloeh';

if (str1.length != str2.length) {
    console.log("Invalid input");
}
var a = str1.split('').sort().join().toLowerCase;
//console.log(a);
var b = str2.split('').sort().join().toLowerCase;
//console.log(b);

for (let i = 0; i < str1.length; i++) {

    if (a[i] === b[i]) {
        console.log(" anagram");

    }

    else {
        console.log("  NOT anagram");

    }
}

