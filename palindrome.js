let a=prompt("Enter string");
let p='';
//p=p.toString().toUpperCase();
for(var i=a.length-1;i>=0;i--){
p=p+a[i];

}

console.log(p);
if(p == a)
{
    console.log("Yes");
}
else{
    console.log("No");
}