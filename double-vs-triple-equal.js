// :23-4: Double equal (==) vs triple (===) implicit..

// double equal:::
// only value check.

//triple equal:::
// value and type check.



//example::

 //const first = 2;
 //const second = "2";
 //if (first == second) {
    // console.log("condition is true");
 //}
 //else{
     //console.log("condition is false");
 //}

 // output:: condition is true


 const first = 2;
 const second = "2";
 if (first === second) {
     console.log("condition is true");
 }
 else{
     console.log("condition is false");
 }
 // output:: condition is false