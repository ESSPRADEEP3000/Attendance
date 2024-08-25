import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import bodyParser from "body-parser";
import student from "./models/student.js";
import allData from "./models/data.js";
import nodemailer from 'nodemailer'
import Trainer from "./models/Trainer.js";
import jwt from "jsonwebtoken";
import authenticateToken from './middleware.js';
// import multer from "multer";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cron from 'node-cron'
import path from 'path';
import crypto from 'crypto'
const app=express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect('mongodb+srv://ssowj7481:c6M13xSVAizqezE8@cluster0.n5c8o9s.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{useNewUrlParser: true,
useUnifiedTopology: true})
.then(()=>app.listen(7000))
.then(()=>console.log("connected to database at localhost 7000"))
.catch((err)=>console.log(err));
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure:false,
    auth: {
        user: 'ssowj7481@gmail.com',
        pass: 'nfcgwichxozecbyv'
    }
});
let starttime=new Date();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let code;
app.use('/images', express.static(path.join(__dirname, 'images')));
app.post('/adduser',async(req,res)=>{
    const {name,lname,email,phno,rollno,passwd,course}=req.body;
    const percentage=0,presentDays=0,TotalDays=0,attendence=false,mail=req.body.email;
    let data;
    try{
    const check= await allData.findOne({email:mail});
    const checkr=await student.findOne({rollno:rollno});
    if(check || checkr)return res.status(200).send({msg:"email or rollno already used"});
    console.log(check);
    data=new student({
        name,
        lname,
        email,
        phno,
        rollno,
        passwd,
        course,
        attendence,
        percentage,
        presentDays,
        TotalDays
    })
    const Role='student';
    const logindata=allData({
        email,
        passwd,
        Role
    })
    const maildata={
        from:'ssowj7481@gmail.com',
        to:email,
        subject:"Registraion to Pulse Track Website",
        text:"Thanks for registering to Our Website",
        html:`<h1>Welcome Mr ${name}</h1>
        <header align="center">Thank's for registering to our website</header>
        <p>For further detials click this link.....</p>
        <a href='www.aec.edu.in'>details</a>`
    };
        await data.save();
        await logindata.save();
        // transporter.sendMail(maildata, (error, info) => {
        //     if (error) {
        //         console.error(error);
        //           return res.status(500).send('Internal Server Error');
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //         return res.status(200).send('Email Sent Successfully');
        //         }
        //     });
        }
    catch(err){console.log(err)}
    return res.send({msg:"data inserted",data:data});
})
app.post('/addtrainer',async(req,res)=>{
    const {name,lname,email,phno,Technology,passwd,AttendanceTaken}=req.body;
    const mail=req.body.email;
    let data;
    try{
    const check= await allData.findOne({email:mail});
    if(check)return res.status(200).send({msg:"email or rollno already used"});
    data=new Trainer({
        name,
        lname,
        email,
        phno,
        Technology,
        passwd,
        AttendanceTaken
    })
    const Role='trainer';
    const logindata=allData({
        email,
        passwd,
        Role
    })
    const maildata={
        from:'ssowj7481@gmail.com',
        to:email,
        subject:"Registraion to Sanjay's Website",
        text:"Thanks for registering to Sanjay's Website",
        html:`<h1>Welcome Mr ${name}</h1>
        <header align="center">Thank's for registering to our website</header>
        <p>For further detials click this link.....</p>
        <a href='www.aec.edu.in'>details</a>`
    };
        await data.save();
        await logindata.save();
        // transporter.sendMail(maildata, (error, info) => {
        //     if (error) {
        //         console.error(error);
        //           return res.status(500).send('Internal Server Error');
        //     } else {
        //         console.log('Email sent: ' + info.response);
        //         return res.status(200).send('Email Sent Successfully');
        //         }
        //     });
        }
    catch(err){console.log(err)}
    return res.send({msg:"data inserted",data:data});
})
app.post('/check-login',async(req,res)=>{
    const mail=req.body.email;
    const pass=req.body.passwd;
    // console.log(req.body.email);
    try{
        const userpasswd= await allData.findOne({email:mail})
    if(!userpasswd){
        return res.status(200).json({msg:"invalid user or not registered",loggedin:false});
    }
    if(pass===userpasswd.passwd)
    {   
        const token = jwt.sign({userId:userpasswd._id}, 'Bravestone7481', { expiresIn:'1h' });
        return res.status(200).send({page:userpasswd.Role,token,loggedin:true});
    }
    else return res.status(200).json({msg:"incorrect password",loggedin:false});
    }
    catch(err){
        console.log(err)
        return res.status(500).json({msg:"Internal server error"});
    }

})
app.get('/dashboard',authenticateToken,async(req,res)=>{
    const data= await allData.findById(req.user.userId);
    try{
    if(!data)return res.status(404).send({msg:"user not found",loggedin:false})
        if(data.Role==='student')
            {
                // res.status(200);
                const stuid=await student.findOne({email:data.email})
                return res.status(200).send({msg:"Studentreport",loggedin:true,info:stuid,role:"student"});
            }
        else if(data.Role==='trainer'){
            const trainer=await Trainer.findOne({email:data.email})
            return res.status(200).send({msg:"Trainer",loggedin:true,info:trainer,role:"trainer"})
        }
        else {
            const admin=await allData.findOne({email:data.email});
            return res.status(200).send({msg:"Admin",loggedin:true,info:admin,role:"admin"});
        }
    }
    catch(err){
        return res.status(500).send({msg:"Authentication error"});
    }
})
app.get('/getdata',async(req,res)=>{
    let data;
    try{
        data=await student.find();
    }
    catch(err){
        console.log(err)
    }
    if(!data)console.log("no data found");
    else return res.status(200).json({data});
})
app.get('/gettrain',async(req,res)=>{
    let data;
    try{
        data=await Trainer.find();
    }
    catch(err){
        console.log(err)
    }
    if(!data)console.log("no data found");
    else return res.status(200).json({data});
})
app.get('/getByid/:id',async(req,res)=>{
    let userid=req.params.id;
    let userdetails;
    try{
        userdetails=await student.findById(userid);
    }
    catch(err)
    {

        console.log(err)
    }
    if(!userdetails)return res.status(400).json({message:"data not found"})
    else res.send({message:"found",result:{userdetails}})
})
app.delete('/delete-user/:id', async (req, res, next)=>{
    const _id = req.params.id
    let users;
    try{
        users = await student.findByIdAndRemove(_id);
        
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(400).json({message:"Unable to delete the user."})
    }
    else{
        await allData.deleteOne({email:users.email});
    return res.status(200).json({message:"Successfully deleted."})
    }
})
app.delete('/delete-trainer/:id', async (req, res, next)=>{
    const _id = req.params.id
    let users;
    try{
        users = await Trainer.findByIdAndRemove(_id);
        
    }catch(err){
        console.log(err)
    }
    if(!users){
        return res.status(400).json({message:"Unable to delete the user."})
    }
    else{
        await allData.deleteOne({email:users.email});
    return res.status(200).json({message:"Successfully deleted."})
    }
})
app.put('/update-user/:id',async (req,res)=>{
    const _id=req.params.id;
    const {name,lname,email,phno,rollno,attendence,course,passwd}=req.body;
    let usr;
    try{
        usr=await student.findByIdAndUpdate(_id,{name,lname,email,phno,rollno,attendence,course,passwd});
    }
    catch(err){
        console.log(err);
    }
    if(!usr)return res.status(400).json({message:"unable to edit"});
    return res.send({msg:"updated",result:{usr}})
})
app.put('/update-trainer/:id',async (req,res)=>{
    const _id=req.params.id;
    const {name,lname,email,phno,AttendanceTaken,Technology,passwd}=req.body;
    let usr;
    try{
        usr=await Trainer.findByIdAndUpdate(_id,{name,lname,email,phno,AttendanceTaken,Technology,passwd});
    }
    catch(err){
        console.log(err);
    }
    if(!usr)return res.status(400).json({message:"unable to edit"});
    return res.send({msg:"updated",result:{usr}})
})
app.put('/changepass',async(req,res)=>{
    const mail=req.body.email;
    const data=allData.findOne({email:mail});
    if(!data)return res.status(200).send({msg:"email is not registered",value:false});
    code = crypto.randomBytes(Math.ceil(6/ 2))
        .toString('hex')
        .slice(0, 6);
    const maildata={
        from:'ssowj7481@gmail.com',
        to:mail,
        subject:"Registraion to Pulse Track Website",
        text:"Thanks for registering to Our Website",
        html:` <h2>Password Change Request</h2>
        <p>Hello ${data.name},</p>
        <p>We received a request to change your password. To proceed with the password change, click the link below:</p>
        <p>Here is the verification code - ${code}</p>
        <p>If you didn't request a password change, please ignore this email.</p>
        <p>Thank you,</p>
        <p>Pulse Track</p>`
    };
    try{

        transporter.sendMail(maildata, (error, info) => {
            if (error) {
                console.error(error);
                  return res.status(500).send('Internal Server Error');
            } else {
                console.log('Email sent: ' + info.response);
                return res.status(200).send('Email Sent Successfully');
                }
            });
            return res.status(200).send({msg:"Verification code sent",value:true,code});
        }
        
    catch(err){
        console.log(err);
    }
})
app.put('/resetpass',async(req,res)=>{
    const {email,passwd}=req.body;
    console.log(email);
    try{
    const data=await allData.findOne({email:email});
    if(!data)return res.status(200).send({msg:"email is not registered",value:false});
    await allData.findByIdAndUpdate(data._id,{$set:{passwd:passwd}});
    if(data.Role=='student')
    {
        const user=await student.findOne({email:email});
        await student.findByIdAndUpdate(user._id,{$set:{passwd:passwd}});
    }
    if(data.Role=='trainer')
    {
        const user=await Trainer.findOne({email:email});
        await Trainer.findByIdAndUpdate(user._id,{$set:{passwd:passwd}});
    }
    return res.status(200).send({msg:"password reset successfull",value:true})
    }
    catch(err){
        console.log(err);
    return res.status(200).send({msg:"something went wrong",value:false})

    }

})
app.get('/gettrainByid/:id',async(req,res)=>{
    let userid=req.params.id;
    let userdetails;
    try{
        userdetails=await Trainer.findById(userid);
    }
    catch(err)
    {
        console.log(err)
    }
    if(!userdetails)return res.status(400).json({message:"data not found"})
    else res.send({message:"found",userdetails});
})
app.put('/check-attendence',async(req,res)=>{
    const rollno=req.body.rollno;
    const curtime=new Date();
    let tech=req.body.technology;
    // console.log(tech);
    const mincount=Math.floor(starttime-curtime)/(1000*60);
    if (mincount>60) {
        return res.status(200).send({ msg: 'Attendance session expired.',value:false,timedelay:Math.abs(mincount-60)});
    }
    let updated;
   
    try{
       const existingRecord = await student.findOne({ rollno: rollno})
        if(!existingRecord)return res.status(200).send({msg:"no data found",value:false});
        if(existingRecord.course!==tech)return res.status(200).send({msg:"Not belong to this batch",value:false})
        if (existingRecord.attendence) {
            return res.status(200).send({ msg:'Duplicate punch. Attendance already marked.', value: true });
        }
        updated = await student.findOneAndUpdate(
            { rollno: rollno }, // filter to find the document based on rollno
            { $inc: {presentDays:1},$set: { attendence: true,percentage:((existingRecord.presentDays+1) / existingRecord.TotalDays * 100).toFixed(2)}},
            { new: true } // options: return the updated document
        );
    }
    catch(err){
        console.log(err);
    }
    if(!updated)return res.status(200).send({msg:"no data found",value:false});
    else return res.status(200).send({msg:"present",value:true});
})
app.get('/start-attendence/:id', async (req,res) => {
    // console.log(req.body);
    const tid=req.params.id;
    const tech=req.body.Technology;
    const attendancetaken=req.body.AttendanceTaken;
    if(!attendancetaken){
        starttime =new Date();
        await Trainer.findByIdAndUpdate(tid,{$set:{AttendanceTaken:true}});
        const data=await Trainer.findById(tid);
    const users = await student.find({course:tech});
    for (const user of users) {
        await student.findByIdAndUpdate(user._id, {
            $set: {
              attendence: false,
              percentage: ((user.presentDays / (user.TotalDays + 1)) * 100).toFixed(2),
            },
            $inc: { TotalDays: 1 },
          });
          
    }
    
    return res.status(200).send({msg:"updated"});
    }
    else return res.status(200).send({msg:"attendance already authorized"});
})
cron.schedule('0 0 * * *', async () => {
    // This task runs at midnight (00:00) every day
    try {
      // Update all trainers' attendancetaken to false
      await Trainer.updateMany({}, { Attendancetaken: false });
      console.log('Attendancetaken fields reset.');
    } catch (error) {
      console.error('Error updating attendancetaken fields:', error);
    }
  });