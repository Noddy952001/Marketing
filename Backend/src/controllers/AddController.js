const express = require("express")
const AddCompney = require("../models/AddCompney")

const router = express.Router()

//

const {upload,
    uploadSingle,
    uploadMultiple}=require("../middleware/fileupload")



router.post("/single", uploadSingle("profile_pic"),async(req, res)=>{
    
  try{
    const addcomney=await AddCompney.create({
      // id: req.body.id,
      name: req.body.name,
      price: req.body.price,
      category:req.body.category,
      profile_pic: req.file.path,
    })
      return res.send(addcomney)
    }catch(err){
      return res.status(500).send({message:err.message})
    }
});

// 


router.get("",async(req,res)=>{
    try{
        const addcomney = await AddCompney.find().lean().exec()
        return res.send(addcomney ) 
        
    }catch(err){
        return res.status(500).send(err.message)
    }
})


module.exports=router
