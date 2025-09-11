import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a vaild mail adress']
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Others'],
        reqired: true,
    },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User',
    },
    nickname: {
        type: String,
        trim: true,
        minlength: 3,
        default: null,
    },
    adress: {
        type: String,
        trim: true,
        default: null,
    },

},{
    timestamps: true,
});


const User = mongoose.model('User', userSchema);
export default User;