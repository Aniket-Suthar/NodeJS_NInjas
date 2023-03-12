//Creating a server

const http = require('http');
const _ = require('lodash');

//This is used to connect to the server
// const server = http.createServer((req, res) => {
//     console.log(req.url,req.method);

//     //Step-1:Set header content type
//     res.setHeader('Content-Type','text/html');

//     //Step-2 : writing the content to be sent
//     // res.write('hello,world im Aniket');

//     //Sending the HTML to the server
//     res.write('<p>Hello World</p>');
//     res.write('<p>Im Aniket Suthar</p>');

//     //Step-3:Ending the response
//     res.end();
// });

//Request object = contains all the info about request i.e is the URL being requested
//also gives the info about types of request i.e "Get req" ,"Post req" etc

//Response object=this object is used to sent the response to the user in the browser


//this is used to make a server to accept various requests

//LocalHost is like a domain name in the web
//It contain a special type of IP address which is known as lookBack IP address i.e = '127.0.0.1'
//This IP address points to our Own computer and then our computer acts like a host

//Port Number are like doors into a Computer
//Various port numbers are used to perform various functionality by various apps and webpages

//Therefore our Server also requires a port number to communicate and the common port number for the localhost is "3000"


//RETURNING HTML PAGE TO BROWSER
// const fs = require('fs');



// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     //Step-1:Set header content type
//     res.setHeader('Content-Type', 'text/html');

//     //sending an HTML file
//     fs.readFile('./bankeralgo.html', (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end();
//         }
//         else {
//             //Method -1
//             // res.write(data);
//             // res.end();

//             //Method -2
//             res.end(data);
//         }


//     });

// });


//BASIC ROUTING  - MOVING FROM ONE HTML PAGE TO OTHER
// const fs = require('fs');


// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method);

//     //Step-1:Set header content type
//     res.setHeader('Content-Type', 'text/html');

//     let path = './'
//     switch (req.url) {
//         case '/home':
//             path += 'mainpage.html';
//             //Adding Status codes to various pages
//             res.statusCode = 200;
//             break;

//         case '/rr':
//             path += 'roundrobin.html';
//             res.statusCode = 200;
//             break;

//         case '/bka':
//             path += 'bankeralgo.html';
//             res.statusCode = 200;
//             break;

//         case '/home-new':
//             //usage of REDIRECT
//             res.setHeader('Location','./home');
//             res.statusCode = 301;
//             break;

//         default:
//             path += '404.html'
//             res.statusCode = 404;
//             break;
//     }
//     //sending an HTML file
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             console.log(err)
//             res.end();
//         }
//         else {
//             //Adding the status code
//             res.end(data);
//         }

//     });
// });





//STATUS CODES = Describe the type of response sent to the browser
/*
1)200 -  OK
2)301 - RESOURCE MOVED
3)404 - NOT FOUND
4)500 - INTERNAL SERVER ERROR
*/






//USAGE OF LODASH MODULE
const fs = require('fs');


const server = http.createServer((req, res) => {

        // console.log(req.url, req.method);
        //Using Lodash
        const num=_.random(0,20);
        console.log(num);

        //calling a function only once
        const greet=_.once(()=>{
            console.log("HELLO");
        })

        greet();
       
   
   
        //Step-1:Set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './'
    switch (req.url) {
        case '/home':
            path += 'mainpage.html';
            //Adding Status codes to various pages
            res.statusCode = 200;
            break;

        case '/rr':
            path += 'roundrobin.html';
            res.statusCode = 200;
            break;

        case '/bka':
            path += 'bankeralgo.html';
            res.statusCode = 200;
            break;

        case '/home-new':
            //usage of REDIRECT
            res.setHeader('Location', './home');
            res.statusCode = 301;
            break;

        default:
            path += '404.html'
            res.statusCode = 404;
            break;
    }
    //sending an HTML file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end();
        }
        else {
            //Adding the status code

            res.end(data);
        }

    });
});


//Listening Server requests and responses
server.listen(3000, 'localhost', () => {
    console.log(`listening for requests on port 3000`)
});