/*
    logical operator -
     three type- 1. logical AND (&&)
                2. Logical OR(||)
                3. Logical NOT (!)
    
    1. &&  - true when both the value are ture
            syntax -- exp1 && exp 2

                ture && true -- true       
                ture && false --false       
                false && true -- false       
                fasle && false -- false
                
    2. ||  true when any one value are true
         syntax -- exp1 || exp2

                ture && true -- true       
                ture && false --true       
                false && true -- true       
                fasle && false -- false


    3. !  --  reverse the value
            ! true = false
            !false = true

*/


let mark= 90;

if(mark>33 && mark>=85){
    console.log("Pass ")
    console.log("A grade")
}


