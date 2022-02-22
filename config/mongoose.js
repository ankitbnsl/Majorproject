// required mongoose 
var mongoose=require('mongoose');

// connected to the db
mongoose.connect('mongodb://localhost:27017/mytodo');
const db = mongoose.connection;

//If error appears print errror in connecting
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// If open successfully print connection is successfull
db.once("open", function () {
  console.log("Connected successfully");
});

module.exports=db;