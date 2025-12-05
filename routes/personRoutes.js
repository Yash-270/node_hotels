const express=require('express');
const router=express.Router();
const Person=require('./..models/person');
router.post('/', async(req,res)=>{
    try{
        const data=req.body;
        const newPerson = new Person(data);
        const res = await newPerson.save();
        console.log('data saved');
        res.status(200).json(res);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
router.get('/',async (req,res)=>{
    try{
        const data= await Person.find();
        console.log('data fetch');
        res.status(200).json(data);
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
})
router.get('./:id',async(req,res)=>{
    try{
        const id=req.params.id;
        if(id=='chef' || id=='manager' || id=='waiter'){
            const res=await Person.find({work: id});
            console.log('res fetch');
            res.status(200).json(res);
        }
        else{
            res.status(404).json({error: 'Ivalid work'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }

});
router.put('/:id',async (req,res)=>{
    try{
        const personId = req.params.id;
        const updinfo=req.body;
        const res=await Person.findByIdAndUpdate(personId,updinfo,{
            new: true,
            runValidators: true,
        });
        
        if(!res){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log('data updated');
        res.status(200).json(res);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
router.delete('./:id',async(req,res)=>{
    try{
        const personId=req.params.id;
        const res=await Person.findByIdAndRemove(personId);
        if(!res){
            return res.status(404).json({error: 'Person not found'});
        }
        console.log("Data deleetd");
        res.status(200).json(res);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
module.exports=router;