let a = parseInt(prompt("Enter score of India"));
let b = parseInt(prompt("Enter score of Australia"));
let c = parseInt(prompt("How much games played by India"));
let d = parseInt(prompt("How much games played by Australia"));
if (a > b) {
    alert("India");
}
else if (a < b) {
    alert("Australia");
}
else {
    if (c < d) {
        alert("India");
    }
    else if(c>d) {
        alert("Australia");
    }
    else{
        alert("Play another game!");
    }
}

