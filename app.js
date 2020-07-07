const express = require("express");
const path = require("path");
const { response } = require("express");
const app = express();
app.listen(process.env.PORT||3000, function(){
    console.log("server connected");
});
app.use(express.static("frontend"));
//app.use("/",function(req,res){
    //console.log(__filename);
//     res.sendFile(path.join(__dirname,"/frontend","/index.html"));

// })
app.use("/addition",function(req,res){
    let num1 = (req.query.a);
    let num2 = (req.query.b);
    let c = parseInt(num1)+parseInt(num2);
    res.send({result:c});
})
app.use("/subtraction",function(req,res){
    let num1 = (req.query.a);
    let num2 = (req.query.b);
    let c = parseInt(num1)-parseInt(num2);
    res.send({result:c});
})
app.use("/multiplication",function(req,res){
    let num1 = (req.query.a);
    let num2 = (req.query.b);
    let c = parseInt(num1)*parseInt(num2);
    res.send({result:c});
})
app.use("/division",function(req,res){
    let num1 = (req.query.a);
    let num2 = (req.query.b);
    let c = parseInt(num1)/parseInt(num2);
    res.send({result:c});
})