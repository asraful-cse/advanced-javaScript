// :23-9: Array slice , splice array join element..

// slice::array theke joto toko slice korbow totoko dekhabe and main array ager motoi thakbe.

// splice:: array theke jei element count korbo tar pore theke joto golo element nibo,
// tar thake count kore sei element show korbe.
// main array splice jeigolo kora hoini just oigolai thakbe.

//array slice code practice:
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
 const part = numbers.slice(2, 7);
 console.log(part);       // output:: [ 3, 4, 5, 6, 7 ]

// array splice code practice::
const removed = numbers.splice(3, 8);  
console.log(numbers);
console.log(removed);
// output::
//   [ 1, 2, 3, 12, 13 ]
//   [
//     4, 5,  6,  7,
//     8, 9, 10, 11
//   ]

const together = numbers.join("!");   // string diye jon korte hobe ("")er vetore ja dibo tai join hobe.
console.log(together);   // output:: 1!2!3!12!13   //main array splice kore join hoyese.


