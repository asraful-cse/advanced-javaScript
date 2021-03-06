// :23-10: break continue in a for loop..


//break code practice::
const numbers = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] > 3) {
        break;
    }
    //console.log(numbers[i]);            // output :: 1 2 3  er modde break hoye gese.
}


// continue code practice::
const nums = [1,-2,3,-4,5,-6,7,-8,9];  //continue korle -ve element skip kore +ve element dekhabe.
for (let i = 0; i < nums.length; i++) {

    if (nums[i] < 0) {           // if (nums[i] > 0)   output:: -2 -4 -6 -8
        continue;
    }
    console.log(nums[i]);        
}
// output::
// 1
// 3
// 5
// 7
// 9