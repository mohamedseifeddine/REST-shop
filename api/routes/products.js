const express = require("express");
const router =  express.Router()

router.get("/",(req,res, next)=>{
  res.status(200).json(
    {
      msg :" handling GET requests to / product  "
    })

})
router.post("/",(req,res)=>{
  res.status(201).json(
    {
      msg :" handling POST requests to / product  "
    })
  })
  router.get("/:productID" , (req,res,next)=>{
    const id = req.params.productID
    res.status(200).json({
      msg:"You Passed an ID" , 
      id
    })
  })
  router.patch("/:productID" , (req,res,next)=>{
    res.status(200).json({
      msg:"updated product"  
     
    })
  })
  router.delete("/:productID" , (req,res,next)=>{
     res.status(200).json({
      msg:"deleted product" , 
      id
    })
  })
  module.exports = router