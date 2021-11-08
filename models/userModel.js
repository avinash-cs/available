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
        default: 'NULL'
    },
    mobile: {
        type: ['Number'],
        required: [false, "Please enter your mobile number!"],
        default: [0]
    },
    state: {
        type: 'String',
       
        required: [false, "Please select your state!"],
        default: 'NULL'
    },
    city: {
        type: 'String',
        required: [false, "Please select your city!"],
        default: 'NULL'
    },
   
    district: {
        type: 'String',
        required: [false, "Please select your district!"],
        default: 'NULL'
    },
    pincode: {
        type: Number,
        required: [false, "Please enter your pincode!"],
        default: 0
    },



}, {
    timestamps: true
})

module.exports = mongoose.model("Users", userSchema)