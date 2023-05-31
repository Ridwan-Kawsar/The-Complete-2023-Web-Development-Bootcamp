//125. Random Number Generation in Javascript: Building a Love Calculator
var n = Math.random(); //Generates a random number between 0-0.999.. (16dp)


//127. Comparators & Equality
/*
=== Is equal to (checks data types)
==  Is equal to (doesn't check data types)
!== Is not equal to
>   Is greater than
<   Is lesser than
>=  Is greater or equal to
<=  Is lesser or equal to 
*/


//128. Combining Comparators
/* 
&&  AND (Condition 1 AND Condition 2 must be true)
||  OR (Condition 1 OR Condition 2 must be true)
!   NOT
*/



//131. Collections: Working with Javascript Arrays
var nameOfArray = [x, y, z];  // Arrays are written in this form 
nameOfArray[0];               // Calling Arrays by their position in the array, i.e. 0 position outputs x, 1st position outputs y, 2nd position outputs z.
nameOfArray.length;           // Outputs 3
nameOfArray.includes();       // .includes is used to find out if an array includes a particular item. Returns a boolean based on whats placed inside the ()'s,



//132. Adding Elements and Intermediate Array Techniques
nameOfArray.push(x);          // Pushes a new entry 'x' at the end of an array
nameOfArray.pop;              // Removes the last entry of the array.



//134. Control Statements: While Loops (Checking a State)
while (something is true) {   // While loops will continue running until the argument is no longer true.
    //Do Something
}



//136. Control Statements: For Loops (Iterate)
for (i=0; i<2; i++) {         // i=0 (Start point), i<2 (End point), i++ (Change of i, what direction, increment/decrement)
    //Do Something
}