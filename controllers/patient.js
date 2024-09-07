const {patientModel} = require("../models/patient")

async function handleSignIn(req,res){

    const patientinfo = req.body;
    const newPatient = {
        Name : patientinfo.patientName,
        Email : patientinfo.patientEmail,
        Password : patientinfo.patientPassword,
    } 
    console.log(await patientModel.findOne({Email:newPatient.Email,Password:newPatient.Password}));
    if(await patientModel.findOne({Email:newPatient.Email,Password:newPatient.Password})){
        // await patientModel.create(newPatient);
        return res.render("patientDashboard.ejs");
    }else{
        return res.send("Therapist Not Found");  
    }
    
} 

module.exports = {handleSignIn}