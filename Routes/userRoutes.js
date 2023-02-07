const express = require('express')
const router = express.Router()
const User = require('../models/PersonsSchema')





   router.post("/addNewPerson" , (req,res)=>{
    
    

    let newPerson=new User(req.body)
    newPerson.save( (err,data)=>{
    err? console.log(err) : res.send('person was added')
    })

   })











module.exports = router