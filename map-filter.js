//:23-5:map, filter , find,   smart way to run forloop..


// filter: filter er kaz hosse  condition fullfil vabe kaz kore dekhano.

// filter and find difference :: 
// difference hosse filter a biggest element joto golo ase sob dekhabe.
// r find shodo ekta element dibe.

// //old coding::

// const numbers = [3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);           // output:: [ 9, 16, 25, 36, 49 ]

 

// const numbers = [3, 4, 5, 6, 7]

// function square(element) {
//     return element * element;   
// }


// map using same this function:::
// const numbers = [3, 4, 5, 6, 7];
// const result = numbers.map(function (element) {
//     return element * element;
    
// })
//console.log(result);               // output:: [ 9, 16, 25, 36, 49 ]


// map and arrow using same this function:::
 const numbers = [3, 4, 5, 6, 7];
const output = numbers.map(element => element * element)
//  console.log(output);            // output:: [ 9, 16, 25, 36, 49 ]

const shortOutput = numbers.map( x => x *x)
// console.log(shortOutput);


// same way using filter :: same array common variable filtering.. 
// filter: filter er kaz hosse  condition fullfil vabe kaz kore dekhano. 
const bigger = numbers.filter(x => x > 5);
// console.log(bigger);        // output:: [ 6, 7 ]


// same way using find :: find same like filter::
const justBigger = numbers.find(x => x > 5);
// console.log(justBigger);        // output:: 6

