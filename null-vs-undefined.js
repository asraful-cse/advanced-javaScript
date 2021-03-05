// :23-3: Null vs Undefined different ways you will get...

//null:: null  is blank and not exist, eita developer ra use kore thake null likhe .
// kono value nai/ null likhe set korar jonno.


// undefined:: onek vabe pete pari variable diclear na korle,
// kono property na thakle ta exist korle
// array er modde emon kico acces korte chasso ja araay er modde nei. 


/// undefined operation:

function add (num1, num2){
   // console.log(num1 + num2);
return                             // eikhane kico return na dile und.
}

const result = add (13,82);
// console.log(result);




function add (num1, num2){
                        
}
// const result = add (13);
// console.log(result);



const premik = {name: "asif", id:213, address: "dhaka",}
//console.log(premik.gf);

let fun = undefined;
//console.log(fun);

let ages = [2,3,4];
// console.log(ages[11]);




// null operation::

function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
      return 0;
    }
    return m.length;
  }
  
  //console.log(getVowels('sky'));
  // expected output: 0
  


