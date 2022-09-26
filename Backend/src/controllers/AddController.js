const express = require("express")
const AddCompney = require("../models/AddCompney")

const router = express.Router()


router.post("",async(req,res)=>{
    try{
        const addcomney = await AddCompney.create(req.body)
        return res.json({ status: 'ok', data: addcomney } )
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})

router.get("",async(req,res)=>{
    try{
        const addcomney = await AddCompney.find().lean().exec()
        return res.send(addcomney ) 
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports=router
