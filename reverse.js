/*let s=prompt("Enter string");
s=s.split('');
let start=0;
var temp=0;
for(var i=0;i<s.length;i++){
    if(s[i] == ''){
        while(start<i){
           temp=s[start];
            s[start]=s[i];
            s[i]=s[start];
            start++;
            i++;

        }
        start=end+1;
    }
}
console.log(s[i]);*/

let data = prompt("Enter string");
let a = '';

for (var i = data.length-1; i >=0; i--) {
    a=a+data[i];
}
console.log(a);
