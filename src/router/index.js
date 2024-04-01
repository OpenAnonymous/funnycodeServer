const express = require("express");
const router = express.Router();
const route = require("./useRoute.js");


router.use("/home",route);
router.use("/about",(req,res) => {
    res.write("<h1>about more</h1>");
    res.end();
})
router.use("/admin",route);

module.exports = router;