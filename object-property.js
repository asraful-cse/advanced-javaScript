// :23-5: Apply map ,filter , find on an array of object...

const students = [
    {id: 21, name:"Deepjol"},
    {id: 32, name:'Fahim'},
    {id: 51, name:'soyeb'},
    {id: 71, name:'rasel'}
]

const names = students.map(s => s.name);
 console.log(names);    // output:[ 'Deepjol', 'Fahim', 'soyeb', 'rasel' ]

const ids = students.map(s => s.id );
 console.log(ids);       //output: [ 21, 32, 51, 71 ]

const bigger = students.filter(s => s.id>30);
 console.log(bigger);
//output::
// [
//     { id: 32, name: 'Fahim' },
//     { id: 51, name: 'soyeb' },
//     { id: 71, name: 'rasel' }
//   ]
const biggerOne = students.find(s => s.id>30);
console.log(biggerOne);    // output:: { id: 32, name: 'Fahim' }