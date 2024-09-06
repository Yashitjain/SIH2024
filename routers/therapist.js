const express = require('express');
const therapistRouter = express();

const { logintherapist } = require('../controllers/therapist');

therapistRouter.get("/",(req,res)=>{
    return res.render("therapist.ejs")
});
therapistRouter.post("/signin",(req,res)=>{
    logintherapist(req,res);
});

module.exports = {therapistRouter};