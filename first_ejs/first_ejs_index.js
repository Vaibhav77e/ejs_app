const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.listen(1234);
app.get("/",(req,res)=>{
    var todayDate = new Date().getDay();
    console.log(todayDate);
    if(todayDate==0 || todayDate == 6){
        res.render("index",{day:"WEEKEND"});
    }else{
        res.render("index",{day:"WORKDAY"});
    }
});