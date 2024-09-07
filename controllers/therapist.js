const {therapistModel} = require("../models/therapist")

async function logintherapist(req,res) {
    const Id = req.body.Id;
    const password = req.body.therapistPassword;
    console.log("id:",Id," password:",password);
    console.log("ID", Id)   
    //  console.log(req)
    if(await therapistModel.findOne({"Id":Id,"password":password})) return res.render('therapistDashboard.ejs')
    else return res.send("therapist Not Found");
};



module.exports = {
    logintherapist
}