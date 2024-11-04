const express = require("express");
const router = express.Router();
const route = require("./useRoute.js");


const tasks = {
    "tasks": [
        { "title": "Find hidden code - watch Bums Show Episode 34", "code": "37422" },
        { "title": "Find hidden code - watch Bums Show Episode 33", "code": "37422" },
        { "title": "Find hidden code - watch Bums Show Episode 32", "code": "31114" },
        { "title": "Find hidden code - watch Bums Show Episode 31", "code": "12345" },
        { "title": "Find hidden code - watch Bums Show Episode 30", "code": "12345" },
        { "title": "Find hidden code - watch Bums Show Episode 29", "code": "23456" },
        { "title": "Find hidden code - watch Bums Show Episode 28", "code": "34567" },
        { "title": "Find hidden code - watch Bums Show Episode 27", "code": "45678" },
        { "title": "Find hidden code - watch Bums Show Episode 26", "code": "56789" },
        { "title": "Find hidden code - watch Bums Show Episode 25", "code": "67890" },
        { "title": "Find hidden code - watch Bums Show Episode 24", "code": "78901" },
        { "title": "Find hidden code - watch Bums Show Episode 23", "code": "89012" },
        { "title": "Find hidden code - watch Bums Show Episode 22", "code": "90123" },
        { "title": "Find hidden code - watch Bums Show Episode 21", "code": "12345" },
        { "title": "Find hidden code - watch Bums Show Episode 20", "code": "23456" },
        { "title": "Find hidden code - watch Bums Show Episode 19", "code": "34567" },
        { "title": "Find hidden code - watch Bums Show Episode 18", "code": "45678" },
        { "title": "Find hidden code - watch Bums Show Episode 17", "code": "56789" },
        { "title": "Find hidden code - watch Bums Show Episode 16", "code": "67890" },
        { "title": "Find hidden code - watch Bums Show Episode 15", "code": "78901" },
        { "title": "Find hidden code - watch Bums Show Episode 14", "code": "89012" },
        { "title": "Find hidden code - watch Bums Show Episode 13", "code": "90123" },
        { "title": "Find hidden code - watch Bums Show Episode 12", "code": "12345" },
        { "title": "Find hidden code - watch Bums Show Episode 11", "code": "23456" },
        { "title": "Find hidden code - watch Bums Show Episode 10", "code": "34567" },
        { "title": "Find hidden code - watch Bums Show Episode 9", "code": "45678" },
        { "title": "Find hidden code - watch Bums Show Episode 8", "code": "56789" },
        { "title": "Find hidden code - watch Bums Show Episode 7", "code": "67890" },
        { "title": "Find hidden code - watch Bums Show Episode 6", "code": "78901" },
        { "title": "Find hidden code - watch Bums Show Episode 5", "code": "89012" },
        { "title": "Find hidden code - watch Bums Show Episode 4", "code": "90123" },
        { "title": "Find hidden code - watch Bums Show Episode 3", "code": "12345" },
        { "title": "Find hidden code - watch Bums Show Episode 2", "code": "23456" },
        { "title": "Find hidden code - watch Bums Show Episode 1", "code": "34567" }
    ]
  };


router.use("/json" ,(req,res)=>{
    res.json(tasks);
})
router.use("/home",route);
router.use("/about",(req,res) => {
    res.write("<h1>about more</h1>");
    res.end();
})
router.use("/admin",route);

module.exports = router;