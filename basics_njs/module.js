
//EXPORTS

//Importing the people file here
const name=require('./people');

//returns an empty object
console.log(name);

//Gives error as people file here can't be used
// console.log(people)


//Another method to export multiple scripts
const {people,ages} =require('./people');
console.log(people,ages);


//Built in Export files
const os= require('os');
console.log(os);


console.log(os.platform(),os.homedir());

