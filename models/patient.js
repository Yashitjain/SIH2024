const { timeStamp } = require("console");
const mongoose = require("mongoose")
const { type } = require("os")
let patientNumber = "P1000";
const schema = {
    patientId : {
        type : String,
        unique : true,
        default : Date.now(),
    },
    Name:{
        type : String,
        require : true
    },
    Age:{
        type : Number,
        require : true
    },
    Gender : {
        type : String,
        require : true
    },
    Email : {
        type : String,
        require : true,
        unique : true
    },
    Password : {
        type : String,
        require : true,
    },
}
const patientSchema = mongoose.Schema(schema,{timeStamp:false});

const patientModel = new mongoose.model("patientModel",patientSchema);

module.exports = {patientModel}