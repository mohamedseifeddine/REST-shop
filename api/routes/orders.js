const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    msg: "  Orders were fetched "
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    msg: "  Orders  created "
  });
});

router.get("/:ordersID", (req, res, next) => {
  res.status(200).json({
    msg: "  Orders details " , 
   id = req.params.ordersID
  });
});
router.delete("/:ordersID", (req, res, next) => {
  res.status(200).json({
    msg: "  Orders dealeted " , 
   id = req.params.ordersID
  });
});


module.exports = router