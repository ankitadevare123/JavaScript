/*const a=2;
const b=2;
console.log("Addition of",a ,"and ", b,"is ", a+b);*/
/* Addition of two numbers
const a=parseInt(parseInt(prompt("Enter First Number"));
const b=parseInt(parseInt(prompt("Enter Second Number"));
const ans=a+b;
console.log("Sum of two numbers are:",ans);
console.log(`Sum of two numbers are ${ans}`)
alert(`Answer ${ans}`);*/

//Square root
/*
const a=parseInt(prompt("Find Square root of");
console.log(`Square root of ${a} is ${Math.sqrt(a)}`);*/




//find maximum number

/*
 const a=parseInt(prompt('Enter first number');
 const b=parseInt(prompt('Enter Second number');
 if(a<b){
     alert(`${b} is greater than ${a}`);
     console.log(`${b} is greater than ${a}`);
 }
 else{
     alert(`${a} is greater than ${b}`);
     console.log(`${b} is greater than ${a}`);
 }
 */
//sort array
/*
const a = [22, 333, 44, 5, 23];
const temp = 0;
for (const i = 0; i < a.length; i++) {
    if (a[i] > a[i + 1]) {
        temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        console.log(a[i]);
    }
    for (i = 0; i < a.length; i++) {
      


    }
}
*/
//check even number
/*
const a=parseInt(prompt("Enter number");
if(a %2 == 0){
    alert("Even Number");
}
else{
    alert("odd number");
}
*/
//Area of triangle
/*
const a=parseInt(prompt("Enter first of triangle "));
const b=parseInt(prompt("Enter second of triangle "));
const c=parseInt(prompt("Enter third side of triangle"));
const s=(a+b+c)/2;
const ans=Math.sqrt(s*(s-a)*(s-b)*(s-c));
alert(`Area of triangle is ${ans}`);
console.log(`The area of triangle ${ans}`);
*/

//Swap of two numbers;

let a=parseInt(prompt("Enter First number"));
let b=parseInt(prompt("Enter Second number"));
//let temp=0;
alert(`Before swapping ${a} and ${b}`);
/*temp=a;
a=b;
b=temp;*/

a=a+b;
b=a-b;
a=a-b;

alert(`After swapping the values are ${a} and ${b} `);
console.log(`After swapping the values are ${a} and ${b} `);