const express = require("express");
const router = express.Router();

router.get("/result", (req, res) => {
    res.render("/result", {});
  });


module.exports = router;