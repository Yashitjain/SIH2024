const mongoose = require('mongoose');

const TherapistSchema = new mongoose.Schema({
    Name : String,
    Id : String,
    password: String,
    Contact : Number,
    Qualification: String,
    Cases: [Number],
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const therapistModel = mongoose.model('Therapist', TherapistSchema);

module.exports = {therapistModel};