import mongoose from "mongoose";
const Schema=mongoose.Schema
let student=new Schema({
    name:{
        type:String,
    required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{type:String,
        required:true
    },
    rollno:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    passwd:{
        type:String,
        required:true
    },
    attendence:{
        type:Boolean,
        required:true
    },
    percentage:{
        type:Number,
    },
    presentDays:{
        type:Number
    },
    TotalDays:{
        type:Number
    }
    
})
export default mongoose.model('Student-user',student);