import mongoose from "mongoose";
const Schema=mongoose.Schema
let Trainer=new Schema({
    name:{type:String,
    required:true},
    lname:{type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phno:{type:String,
        required:true
    },
    Technology:{
        type:String,
        required:true
    },
    AttendanceTaken:{
        type:Boolean,
    },
    passwd:{
        type:String,
        required:true
    }
})
export default mongoose.model('Trainers',Trainer);