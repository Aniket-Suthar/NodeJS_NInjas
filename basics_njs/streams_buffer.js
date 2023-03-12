//Used to larger content file where the fileSystem 
//can't work efficiently

const fs=require('fs');

//1)Reading the file using the stream

//this is used to identify that where we have to read the data
const readStream =fs.createReadStream('./basics_njs/n.txt',{encoding:'utf8'});

//this is like a event listener
readStream.on('data',(chunk)=>{
    console.log("------- NEW CHUNK ------")
    console.log(chunk)
})

//After writing "encoding :utf8" then we don't have to write chunk.toString() to make content in readable form


//2)Writing the file using WriteStream
const writestream=fs.createWriteStream('./basics_njs/n2.txt');


//copying the data of file "n.txt" to file "n2.txt"
// readStream.on('data',(chunk)=>{
//     console.log("------- NEW CHUNK ------")
//     console.log(chunk)

//     //Passing the data to be written in file
//     writestream.write("\nNEW CHUNK WRITTEN \n")
//     writestream.write(chunk);
// });



//3)Piping  converting readStream to writeStream

//this save writing the above code instead of this one line
//here content of file "n.txt" is copied to file "n2.txt"
readStream.pipe(writestream);

