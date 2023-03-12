const { render } = require('ejs');
const express=require('express');

//Adding Mongoose package
const mongoose=require('mongoose');

//Adding the Morgan MiddleWare for logger
const morgan=require('morgan');


//Importing the Blog file(model/schema)created for passing the data into it
const Blog=require('./models/blog');

//connection String to MOngoDB
const dbURI ='mongodb+srv://aps:aps1234@nodejsbasics.pb7zswn.mongodb.net/node-basics?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
  .then((result)=>app.listen(3000)) //making to listen to server only
  .catch((err)=>console.log(err))

// //Creating a Express App
// const app=express();

//Listening for Requests



// // app.get('/',(req,res)=>{
// //     res.send('<p>Hello world</p>');
// // });


// //Sending HTML FILES and ROUTING using EXPRESS
// app.get('/about',(req,res)=>{
//    //Sending HTML file
//    res.sendFile('./mainpage.html',{root:__dirname})
// });


// app.get('/rr',(req,res)=>{
//     res.sendFile('./roundrobin.html',{root:__dirname})
// });


// //here {root:__dirname} is given because in sendFile method the path should always be relative to something
// //and hence to make it relative to our current working directory we us "__dirname"
// app.get('/bka',(req,res)=>{
//     res.sendFile('./bankeralgo.html',{root:__dirname})
// });



// //REDIRECTS using EXPRESS
// app.get('/about-us',(req,res)=>{
//     res.redirect('/about');
// });

// //404 in EXPRESS
// //"use" = basically fires for every url that we execute and if none of the about url matches then
// //it will finally reaches to this point and executes this

// //And this should be always at end/bottom as its position matter
// app.use((req,res)=>{
//     res.status(404).sendFile('./404.html',{root:__dirname});
// });




//************** USAGE OF "EJS"  AND  "VIEW ENGINE"

//Creating a Express App
const app=express();



//registering view engine
app.set('view engine','ejs');

//Listening for Requests
// app.listen(3000);

//USAGE OF MIDDLE WARES
//Making a log MW without Morgan
// app.use((req,res,next)=>{
//   console.log('new request made:');
//   console.log('host:',req.hostname);
//   console.log('path:',req.path);
//   console.log('mathod:',req.method);
// //Making server understand to that MW is over and move to next Request made
//   next();
// });
//After loading this file Server will be hanged and will not know that after this next where to move
//hence we have to explicitly mention the next method to be executed





//* * * * * * * *  V A R I O U S   D B   O P E R A T I O N S * * * * * * * 
//Getting and Saving the data in DB 
//Mongoose and Mongo Sandbox routes
// app.get('/add-blog',(req,res)=>{
//   const blog=new Blog({
//     title:'NEw Blog2',
//     snippet:'about my new Blog',
//     body:'more about my blog'
//   });

//   //used to save the data to Database
//   blog.save()
//  .then((result)=>{
//     res.send(result);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// });

// //Getting all the documents created
// app.get('/all-blogs',(req,res)=>{

//   //Method to get all the documents
// Blog.find()
// .then((result)=>{

//   //sending the result to be displayed in browser
//   res.send(result);
// })
// .catch((err)=>{
//   console.log(err);
// })
// })


//Getting a single BLog by id
// app.get('/single-blog',(req,res)=>{
//   Blog.findById('63f1ff06384b0266e0753aea')
//   .then((result)=>{
//     res.send(result);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// })




//* * * * * * *  M I D D L E W A R E S * * * * * * *
//MW for static FIles like "Stylesheets (CSS)"
app.use(express.static('public')) //Public is the name of folder created and whatever files we place in the public folder will be available to all the HTML pages to browsers

//Making a Logger MW using Morgan
app.use(morgan('dev')); //another is 'tiny' instead of 'dev'


//MW for making the data coming from "POST" request to readable format
app.use(express.urlencoded({extended:true}));



//* * * * * * * * *  R E N D E R I N G    A N D    R O U T I N G  * * * * * * * *
//Rendering HTML file using ejs
app.get('/',(req,res)=>{
  //* * * * * * PASSING DATA INTO VIEWS * * * * * */
  
    // const blogs = [
    //   {title: 'Aniket finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //   {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];

    // res.render('index', { title: 'Home', blogs });

    //Rendering all blogs from database
    res.redirect('/blogs');
});



//* * * * * * *  VARIOUS BLOG ROUTES  * * * * * * * 
app.get('/blogs',(req,res)=>{

  //Passing the all the data from DB to the array of "blogs" created in "index.ejs" page
  Blog.find().sort({createdAt:-1}) //Sorting the blogs from newest to oldest ("-1")
  .then((result)=>{
    res.render('index',{title:'Blogs',blogs:result})
  })
  .catch((err)=>{
    console.log(err);
  })
})




//H A N D L I N G   A    P O S T    R E Q U E S T
app.post('/blogs',(req,res)=>{
  //For printing the data entered by user in Console
// console.log(req.body);

//Saving the data in DB
const blog = new Blog(req.body);

//Saving the VALUE to the DB
blog.save()
.then((result)=>{
  res.redirect('/blogs');
})
.catch((err)=>{
  console.log(err);
})
})




//* * * * * * * HANDLING GET REQUEST FOR UPDATE * * * * * * *
app.get('/blogs/:id',(req,res)=>{

  //Extrating the "id" from the 'blogs/:id'
  const id = req.params.id;

  Blog.findById(id)
  .then((result)=>{
    res.render('details',{blog:result,title:'Blog Details'})
  })
  .catch((err)=>{
    console.log(err);
  })
})



//* * * * * * * *  HANDLING DELETE REQUESTS * * * * * ** 
app.delete('/blogs/:id',(req,res)=>{
  const id=req.params.id;

  Blog.findByIdAndDelete(id)
  .then(result =>{
    res.json({redirect:'/blogs'})
  })
  .catch((err)=>{
    console.log(err)
  })
})








app.get('/about',(req,res)=>{
  res.render('about',{title:'About US'});
});


//REDIRECTING
app.get('/about/create',(req,res)=>{
  res.render('create',{title:"Create"});
})

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});




//* * * * * * * * T H E O R Y * * * * * * * *
//MIDDLEWARES
/*
Code which runs (on the server) between getting a request and sending a response
In this "use" method is mostly used for middlewares and they are nothing but set of functions
All MiddleWares functions runs from top to bottom 
Hence for MW ordering matters the most

Examples of Middlewares Usage
1)Logger Middleware to log Details of Every request
2)Authentication check MW for Protected routes
3)MW to parse JSON data from requests
4)Return 404 pages>
*/

/*
There are also some 3rd Party MW 
1)Morgan - A MW used for logger
2)Helmet - A Security MW for cookies,etc.
*/


//ADDING STATIC FILES
/*
In HTML if we want to add images or videos or Various Stylesheets of CSS
then we can't directly add it to the html 
=>For this we have to use MW present in Express
*/ 



//DATABASE CONNECTIVITY
/*
About Mongoose= it is an ODM(Object Document Mapping) Library
It has two models - 1)Blog and 2)User
Models allow us to communicate with database collections

*/



//* * * * * * * * TYPES OF REQUESTS * * * * * * * *
/*
1)POST = requests to create new data(ex. a new Blog)
2)GET = requests to get a resource
3)DELETE = requests to delete data(ex. delete a Blog)
4)PUT = requests to update data(ex. update a Blog)
*/


//ROUTE PARAMETERS
/*
The variable parts of the route that may change value
examples- 
1)localhost:3000/blogs/:id
2)localhost:3000/blogs/12345
3)localhost:3000/blogs/50
4)localhost:3000/blogs/hello
*/ 