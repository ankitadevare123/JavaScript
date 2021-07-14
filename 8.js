//Quadratic equation
/*
let root1,root2;
var a=parseInt(prompt("Enter first number"));
var b=parseInt(prompt("Enter second number"));
var c=parseInt(prompt("Enter third number "));
 let dis=b*b-4*a*c;
 if(dis>0){
root1=(-b+Math.sqrt(dis))/(2*a);
root2=(-b-Math.sqrt(dis))/(2*a);
alert(`The roots of quadratic equation are ${root1} and ${root2}`);

console.log(`The roots of quadratic equation are ${root1} and ${root2}`) 

 }
 else if(dis==0){
     root1=root2=-b/(2*a);
  console.log(`The roots of quadratic equation are ${root1} and ${root2}`) ;
  alert(`The roots of quadratic equation are ${root1} and ${root2}`);

 }
 else{
     let realPart=(-b/(2*a)).toFixed(2);
     let imagPart=(Math.sqrt(-dis)/(2*a)).toFixed(2);
     console.log(`The root of quadratic equations ${realpart}+${imagpart} i and ${realPart}-${imagPart}i`);
     alert(`The root of quadratic equations ${realpart}+${imagpart} i and ${realPart}-${imagPart}i`);
    }
*/
 //Kilometers into miles
  var a=parseFloat(prompt("Enter Kilometer"));
  //kilometer into miles
  var ans=a*0.621371;
  //miles into kilometer
  //kilometer=miles/factor;
  console.log(`Kilometers ${a} is converted into miles ${ans}`);
  alert(`Kilometers ${a} is converted into miles ${ans}`);