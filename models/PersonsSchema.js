const mongoose = require('mongoose')
/* const Schema = mongoose.Schema() */


const userSchema = new mongoose.Schema({
    firstName : {
        type : String
        /* required : true   */
    },

    lastName : {
        type : String,
        /* required : true  */
    },

    email : {
        type : String,
        /* required : true  */
    },

    phoneNumber : {
        type : Number,
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User

required : true 
/* const mongoose = require ('mongoose')


const userSchema = new mongoose.Schema ({

    name : {
        type: String,
        required: true
    } ,

    email : {
        type: String,
        required: true,
        unique : true
    } ,

    Password : {
        type: String,
        required: true
    } ,

    Role : {
        type: Number ,
        default : 0
    }

}, {timestamps : true})

module.exports = mongoose.model('user' , userSchema ) */