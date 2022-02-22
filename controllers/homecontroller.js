// require mongoose and todomodel
const { models } = require('mongoose');
var Todo =require('../models/todo_model');

// home function to load all the todos from database and print on home page
module.exports.home= function(req,res){
    //using find get all the data from database
    Todo.find({},function(err,todos){
        if(err){ console.log("error in fetching contacts from database"); return;}            
        return res.render('home',{todo_list: todos});
 });
};

// create function -> to crete new entry in database
module.exports.create = function(req,res){
    Todo.create(req.body,function(err,newcontact){
        if(err){console.log("error in adding new contact"); return;}
         console.log("Added successfully");
        return res.redirect('back');
        });
        
};


// delete conact function to delete the entries which are selected by user
module.exports.deletecontact= function(req,res){

    let id = req.query;
    console.log(id);

//gives the length of the selected checkboxes
let checkboxes=Object.keys(id).length;

//iterating over each selected boxes
for(let i=0;i<checkboxes;i++)
{
   // find the item in the database using id and delte it
   Todo.findByIdAndDelete(Object.keys(id)[i],function(err)
   {
       if(err)
       {
           console.log("error in deleteing the item");
           return;
       }
       
   })
}
return res.redirect('back');

}

