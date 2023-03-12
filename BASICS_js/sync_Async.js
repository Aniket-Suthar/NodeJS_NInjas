//Synchronous Method
const fun2 = () => {
    console.log("fun2 is starting");
}


//Asynchronous mode
const fun3 = () => {
    setTimeout(() => {
        console.log("func1 is starting");
    }, 3000)
}

const func1 = () => {
    console.log("func1 is starting");
    fun3();
    console.log("Func1 ending");
}
func1();

