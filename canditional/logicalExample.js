// check the string is good or not id string start with a and length >3
// string="aeroplane"

let string="app";
//let string = "aeroplane"
if(string[0]=='a' && string.length>3){
    console.log("This string is good string")
}
else{
    console.log("string are not good string")
}


/* -----------------------------------------------------------*/

let num=12;

if((num%3==0)&& ((num+1==15)||(num-1==11))){
    console.log(true)
}
else{
    console.log(false)
}