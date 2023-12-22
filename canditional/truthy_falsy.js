/* everything in js has true or false value
  -- it doesnot mean thier vslue is false or true but they are treated as false or ture
   if they are taken in boolean contxt 

   Falsy value are--
   false, 0, -0, "",null , NAN, undifend

   truly value  --- everything except falsy
*/

if(false){
    console.log("it has true value")
}else{
    console.log("it has false value")
}


//----------------------------------------------------------------------

let string= ""
if(string){
    console.log("string is not empty")
}else{
    console.log("string is empty")
}