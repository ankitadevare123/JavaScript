
let t=2;
while(t--)
{
  min=0;
  count=0;
 let n=[1,27,3,4,5];
 let m=[12,34,55,43,21]; // let n=prompt("Enter number of building");
 let  r=5 ;//prompt("Enter rupee");
for(i=0;i<n.length;i++)
{
  //let a= [1,2,3,4,5];//prompt("Enter heights of building");
a=n[i];
  if(a>min) 
  {
min=a;
count++;
  } 
}
  console.log(r*count);

}

