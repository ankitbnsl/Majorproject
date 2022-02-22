// Get all required modules like express nad mongoose , set port to 3000
const express=require('express');
const app= express();
const port=8000;
var mongo= require('./config/mongoose');

// set up view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

// To read url request data
app.use(express.urlencoded());

// used static files
app.use(express.static('assets'));

// used express routes
app.use('/',require('./routes/index'));

// app listening on port
app.listen(port,function(err){

     if(err){
         console.log('Error in running server');
         return;
     }
     console.log('Server is running at port : ',port)
 });




