/// :23-2: Truthy & falsy values...


// >> if and else condition er khetre <<

// all string true other then blank. example " ", "abcdeffsdfgdjka".
// all values true other then 0.   example: 123456789


// when any value undefined is false . example: let name;  
// when any values is null ,so false condition. example: let name = null;
// when any values is NaN ,so false condition. example: let name = NaN;

// truthy::
// "0", " " , [] , {} , () so all strings and values is truthy..

// falsy::
// 0
// ""
// undefined
// null
// NaN
// false example:: let name = false;

let name = 0;
if (name || name == 0) {
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


//$ node true-false.js
//condition is true




