const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const multer  = require('multer')
const {patientModel} = require("./models/patient")
const {patientRouter} = require("./routers/patient");
const {therapistRouter} = require("./routers/therapist")
mongoose.connect("mongodb+srv://Yashit:Yashit%402004@cluster0.dxdiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const app = express();
app.use(express.json());
app.use(express.urlencoded({extends:true}))
app.use(bodyParser.json());

app.set("view engine","ejs")
app.set("views","views");

app.use(express.static("public"))
app.use(express.static("views"))


app.get("/",(req,res)=>{
    res.render("patient.ejs");  
})

app.get("/dashboard",(req,res)=>{
    res.render("patientDashboard.ejs");
})

app.use("/patient",patientRouter);
app.use("/therapist",therapistRouter);


app.listen(8005,console.log("running"))


