const {therapistModel} = require("../models/therapist")

async function logintherapist(req,res) {
    const Id = req.body.Id;
    const password = req.body.therapistPassword;
    console.log("id:",Id," password:",password);
    console.log("ID", Id)   
    //  console.log(req)

    if(Id === ""){
        return res.status(400).json({message: "Id is required"});
    }if(password === ""){
        return res.status(400).json({message: "Password is required"});
    }

    const user = await therapistModel.findOne({"Id":Id});
    if(!user){
        return res.status(400).json({message: "User does not exist"});
    }

    const isPasswordCorrect =  await therapistModel.findOne({"password" :password});

    if(!isPasswordCorrect){
        return res.status(400).json({message: "Password is incorrect"});
    }

    return res.render('therapistDashboard.ejs')
};



module.exports = {
    logintherapist
}