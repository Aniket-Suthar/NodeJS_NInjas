//FILE SYSTEM
//These are useful to read small files

//importing "fs" module fs=fileSystem
const fs = require('fs');


//1) Reading Files
//It is a Async Process
fs.readFile('./basics_njs/new.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        //toString method is used to conver the data buffer in readable format
        console.log(data.toString())
    }
});


//2) Writing Files
fs.writeFile('./basic_njs/new2.txt','hello world im ANiket suthar',()=>{
    console.log("File was Written")
});

//If file doesn't exists then it will create a new file


//3) Deleting Files
if(fs.existsSync('./basics_njs/new2.txt'))
{
    fs.unlink('./basics_njs/new2.txt',(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File Deleted SUccessfully")
        }
    })
}





//4) Directories
// fs.mkdir('./newFolder',(err)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('Folder Created')
//     }
// })

//If the folder exists then it wil give error
//TO avoid this we will use this
if(!fs.existsSync('./basics_njs/newFolder')){
    fs.mkdir('./basics_njs/newFolder',(err)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log('Folder Created')
        }
    });
}
else{
    fs.rmdir('./basics_njs/newFolder',(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Folder Deleted")
        }
    })
}