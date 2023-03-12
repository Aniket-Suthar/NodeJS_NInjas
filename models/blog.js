const mongoose = require('mongoose');

//Schema is used to design the structure of our DB
const Schema = mongoose.Schema;

//creating New Instance of Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }

}, { timestamps: true }); //Timestamps give the time for every update we did


//Creating Model used to surround the above created schema to provide
//user interface with database connections


//in the brackets of model we have to write the name of collection which we want to use here we write "Blog" as we have mentioned "blogs" as collection
const Blog =mongoose.model('Blogs',blogSchema);

//Exporting this created blog to use further
module.exports=Blog;