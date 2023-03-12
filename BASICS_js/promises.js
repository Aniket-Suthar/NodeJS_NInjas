//Creating a new promise
//Promise is used to give a surity that the following set of code will run
//All Promises have two states either - Resolved or Rejected


// let promise = new Promise(function(resolve,reject){
//    console.log("I a new Alert");
//    resolve(56);
// })
// console.log("Hello")

// setTimeout(function(){
//     console.log("hello in 2 seconds");
// },2000)

// console.log("My name is Aniket");
// console.log(promise);


//Why promise is used
/*
1)In parallel Processing
2)To give a surity and smooth code execution
*/


//.then()  and  .catch() method
let p1 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promie and I am Fulfilled");
        //Providing a value to call the resolve
        
        //resolving the promise
        resolve(true);
    })
    
})


let p2 = new Promise((resolve,reject)=>{
    console.log("Promise is pending")
    setTimeout(()=>{
        console.log("I am a promie and I am Fulfilled");
        //Providing a value to call the resolve
        

        //making a promise rejected
        reject(new Error("I am an Error"));
         },5000)
})

//If Promise is fulfilled as resolved then what to do is defined using "then"
p1.then((value)=>{
    console.log(value)
})

//Catching an Error
p2.catch((error)=>{
    console.log("SOme error occured in P2")
})

//All Promises consists of two states Fullfiled (P1) and rejected (P2)
 
//"then" can be used as both the ways fro value and error
p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

//Most widely usage of promise is in Network connections
