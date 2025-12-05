const express=require('express');
const MenuItem=require('./..models/MenuItem');
const router=express.Router();
router.post("/",async (req,res)=>{
    try{
        const data=req.body;
        const newMenu=MenuItem(data);
        const res=await newMenu.save();
        console.log("data saved");
        res.status(200).json(res);
    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
router.get("/",async (req,res)=>{
    try{
        const res=await MenuItem.find();
        console.log("data fetched");
        res.status(200).json(res);
    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
router.get("./:id",async (req,res)=>{
    try{
        const id=req.params.id;
        if(id=='sweet' || id=='sour' || id=='spicy'){
            const res=await MenuItem.find({taste: id});
            console.log("res fetch");
            res.status(200).json(res);
        }
        else{
            res.status(404).json({error: 'Ivalid work'});
        }
    }
    catch{
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
router.put()
// tu js bhar mein
module.exports=router;