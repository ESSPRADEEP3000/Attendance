import mongoose from "mongoose";
const Schema=mongoose.Schema
let allData=new Schema({
    email:{
        type:String,
        required:true
    },
    passwd:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    }
    
})
export default mongoose.model('AllLogins',allData);