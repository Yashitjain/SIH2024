const express = require("express")
patientRouter = express();
const {handleSignIn} = require("../controllers/patient")

patientRouter.post("/",(req,res)=>{
    console.log("here");
    handleSignIn(req,res);
});



module.exports = {patientRouter}