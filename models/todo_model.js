//require monsoose
const mongoose= require('mongoose');

//create a schema to define which type of data we want to store
const todoSchema= new mongoose.Schema({
   description:{ type:String , required:true},
   category:{type:String , required:true},
   date:{type: Date,required:true}
 
});

// assign the folder where data to be stored
const Todo = mongoose.model('todo',todoSchema);

 module.exports=Todo;


