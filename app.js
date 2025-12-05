const express=require('express');
const app=express();
const db=require('./db');
const bodyParser=require('body-parser');
const Person = require('./models/person');
const MenuItem= require('./models/menu');
app.use(bodyParser.json());
app.get('/',function(req,res){
    res.send("papa");
});
app.get('/chicken',function(req,res){
    res.send("chicken");
});
app.get('/idli',function(req,res){
    var cust_idli={
        name: "Rava idli",
        size: "10 cm",
        is_sambhar: true,
        is_chytney: false
    }
    res.send(cust_idli);
});
const personRoutes=require('./routes/personRoutes');
app.use('/person',personRoutes);
const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);


    // newPerson.name = data.name;
    // newPerson.age=data.age;
    // newPerson.mobile=data.mobiel;
    // newPerson.mobile=data.mobiel;
    // newPerson.mobile=data.mobiel;
    // newPerson.mobile=data.mobiel;
app.listen(5000,()=>{
    console.log("App is running");
});
