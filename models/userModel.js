const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png"
    },
    gender: {
        type: 'String',
        required: [false, "Please enter your gender!"],
       
    },
    mobile: {
        type: ['Number'],
        required: [false, "Please enter your mobile number!"],
    },
    state: {
        type: 'String',
       
        required: [false, "Please select your state!"],
        
    },
    city: {
        type: 'String',
        required: [false, "Please select your city!"],
    },
   
    district: {
        type: 'String',
        required: [false, "Please select your district!"],
    },
    pincode: {
        type: Number,
        required: [false, "Please enter your pincode!"],
    },



}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)