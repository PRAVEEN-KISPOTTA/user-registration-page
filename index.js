const express = require("express");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./routes/userRoutes");
const port = 3000;

mongoose.connect("mongodb+srv://userRegistration:Y1EG6YJzGniDPWsH@cluster0.pwgmq1o.mongodb.net/?retryWrites=true&w=majority")
app.get("/check", (req, res)=>{
    res.send("running");
});

app.use("/", userRoute)

app.listen(port, (data, err)=>{
    if(err){
        return console.log("Error",err);
    }
    console.log(`Port is running in  ${port}`);
});

//Y1EG6YJzGniDPWsH