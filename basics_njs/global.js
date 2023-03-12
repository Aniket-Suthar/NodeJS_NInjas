//Global Object
console.log(global);

//Timeout Function
setTimeout(()=>{
    console.log("In the timeout")
    //Stopping the interval after 3 sec
    clearInterval(int);
},3000)


// //Interval
const int = setInterval(()=>{
    console.log("Int the interval")
},1000)

//Getting Directory and filename
console.log(__dirname);
console.log(__filename);
