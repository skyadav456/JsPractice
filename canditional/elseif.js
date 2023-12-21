/*   else- if     --- use with if statement and after the if statement
    - else statement work when the is statement is false

syntax
  
    if(candition){
        // code
    }
    elseif(candition2){
        // code
    }
    elseif(canditon3){

    }
*/

// gradesheet

let mark=23;

if(mark>80){
    console.log("A+ grade")
}
else if(mark>=75){
    console.log("Grade A")
}
else if(mark>=60){
    console.log(" grade B+")
}

else if(mark<=33){
    console.log("Fail")
}