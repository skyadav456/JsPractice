
/*  used to compare the value 
   >    - grater than
   <   lesser than
   >=   greater than eqaual to
   <=  less than equal to
   ==  equal equal to 
   !=  does not equal to

*/

let age= 15
console.log(age>5)      //true
console.log(age<18)     // true
console.log(age<=18)    // true
console.log(age>=18)    // false
console.log(age==18)    // false
console.log(age!=18)    //true

//-Different Between '==' and '==='
console.log("-----------------------------------------------------")

 console.log('123'==123)          // true
 console.log('123'===123)         // false

 console.log('1'==1)                // true
 console.log('1'===1)               // false

 console.log('0'==false)                // true
 console.log('1'===false)               // false 

 console.log(null== undefined)                // true
 console.log(null===undefined)               // false 


 
 console.log("------------------------------------------------------")
 /* Compare of non number 
    every character have the unicode so java script compare thier unique code
   -- java script compare the unique code of character b
    unique code of small charcter is greater than the capital char
 */

console.log('a'>'A')
console.log('a'>'b')
