// Get homecontroller from controllers folder
const homecontroller =require('../controllers/homecontroller');

// Using express router function
const express=require('express')
const router=express.Router();

//for homepage 
router.get('/',homecontroller.home);

// for add task call crete function in homecontroller file
router.post('/contact',homecontroller.create);

// for delete task call deletecontact function in homecontroller file
router.get('/deletetask',homecontroller.deletecontact);

module.exports=router;
