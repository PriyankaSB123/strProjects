module.exports=(app)=>{var mongoose = require('mongoose');
var userModel = require('../models/userModel');

  app.post('/registerUser',function(req,res,next){
    try{
      console.log("req.body",req.body)
     
    userModel.users.create((req.body),function(error,data){
     // console.log("DOCUMENTS",docs)
     
       //const user=new userModel.users(req.body);
       //user.save((error,data)=>{
          
          if (error) {
            return next(error)
            } else {
            res.status(200).json(data)
            }
        
      //})
    })
}catch (error) {
  res.status(400).json({
      success: false,
      msg: `${error}`
  });
}
  })

  app.get('/employee-list',function(req,res){
    try{
    userModel.users.find((error,data)=>{

     // console.log("response",data)
          if(!error){
            res.status(200).json(data)
          }else{
            res.status(400).json({
              success: false,
              err: err
          });
          }

    })
  }catch (error) {
    res.status(400).json({
        success: false,
        msg: `${error}`
    });
  }
  })

}