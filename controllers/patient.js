const {patientModel} = require("../models/patient")

async function handleSignIn(req,res){
    // const allPatients = await patientModel.find({});
    // console.log("allpatients=>"+allPatients);
    const patientinfo = req.body;
    const newPatient = {
        Name : patientinfo.patientName,
        Email : patientinfo.patientEmail,
        Password : patientinfo.patientPassword,
    } 
    if(! await patientModel.findOne({Email:newPatient.Email,Password:patientinfo.Password})){
        try{
            await patientModel.create(newPatient);
        }catch{
        return res.send("Therapist Not Found");       
        }
        return res.render("patientDashboard.ejs");
    }
    
} 

module.exports = {handleSignIn}