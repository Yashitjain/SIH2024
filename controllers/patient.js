const {patientModel} = require("../models/patient")

async function handleSignIn(req,res){
    const allPatients = await patientModel.find({});
    console.log("allpatients=>"+allPatients);
    const patientinfo = req.body;
    // console.log(req)
    const newPatient = {
        Name : req.body.patientName,
        Email : req.body.patientEmail,
        Password : req.body.patientPassword,
    } 
    console.log(newPatient)
    if(await patientModel.findOne(newPatient)) return res.render("patientDashboard.ejs");
    else return res.send("Patient do not exist");
    
} 

module.exports = {handleSignIn}