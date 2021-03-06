// :23-8:closure ,encapsulation , private variable..

// // closure::
//  jodi kon ekta function theke jodi aro ekta function ke call kori,
//  /return kore tokhon tar modde close environment 
//  toiri kore  eitai hosse closure.

function stopWatch() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

// // output::
// 2
// 3
// 4
// 5
const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

// output::
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5