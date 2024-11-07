const express = require("express");
const router = express.Router();
const route = require("./useRoute.js");


const tasks = {
    "tasks": [
        { "title": "Find hidden code - watch Bums Show Episode 37", "code": "35194" },
        { "title": "Find hidden code - watch Bums Show Episode 36", "code": "35583" },
        { "title": "Find hidden code - watch Bums Show Episode 35", "code": "10300" },
        { "title": "Find hidden code - watch Bums Show Episode 34", "code": "52860" },
        { "title": "Find hidden code - watch Bums Show Episode 33", "code": "37422" },
        { "title": "Find hidden code - watch Bums Show Episode 32", "code": "31114" },
        { "title": "Find hidden code - watch Bums Show Episode 31", "code": "31114" },
        { "title": "Find hidden code - watch Bums Show Episode 30", "code": "89349" },
        { "title": "Find hidden code - watch Bums Show Episode 29", "code": "97028" },
        { "title": "Find hidden code - watch Bums Show Episode 28", "code": "97028" },
        { "title": "Find hidden code - watch Bums Show Episode 27", "code": "71728" },
        { "title": "Find hidden code - watch Bums Show Episode 26", "code": "91467" },
        { "title": "Find hidden code - watch Bums Show Episode 25", "code": "13458" },
        { "title": "Find hidden code - watch Bums Show Episode 24", "code": "13458" },
        { "title": "Find hidden code - watch Bums Show Episode 23", "code": "16086" },
        { "title": "Find hidden code - watch Bums Show Episode 22", "code": "18948" },
        { "title": "Find hidden code - watch Bums Show Episode 21", "code": "74737" },
        { "title": "Find hidden code - watch Bums Show Episode 20", "code": "83273" },
        { "title": "Find hidden code - watch Bums Show Episode 19", "code": "86100" },
        { "title": "Find hidden code - watch Bums Show Episode 18", "code": "86100" },
        { "title": "Find hidden code - watch Bums Show Episode 17", "code": "35264" },
        { "title": "Find hidden code - watch Bums Show Episode 16", "code": "98109" },
        { "title": "Find hidden code - watch Bums Show Episode 15", "code": "68948" },
        { "title": "Find hidden code - watch Bums Show Episode 14", "code": "92317" },
        { "title": "Find hidden code - watch Bums Show Episode 13", "code": "48516" },
        { "title": "Find hidden code - watch Bums Show Episode 12", "code": "71500" },
        { "title": "Find hidden code - watch Bums Show Episode 11", "code": "30436" },
        { "title": "Find hidden code - watch Bums Show Episode 10", "code": "36624" },
        { "title": "Find hidden code - watch Bums Show Episode 9", "code": "26483" },
        { "title": "Find hidden code - watch Bums Show Episode 8", "code": "19988" },
        { "title": "Find hidden code - watch Bums Show Episode 7", "code": "63990" },
        { "title": "Find hidden code - watch Bums Show Episode 6", "code": "57492" },
        { "title": "Find hidden code - watch Bums Show Episode 5", "code": "33270" },
        { "title": "Find hidden code - watch Bums Show Episode 4", "code": "13527" },
        { "title": "Find hidden code - watch Bums Show Episode 3", "code": "51264" },
        { "title": "Find hidden code - watch Bums Show Episode 2", "code": "88125" },
        { "title": "Find hidden code - watch Bums Show Episode 1", "code": "95065" },
        { "title": "Find hidden code - watch Bums Show Episode 0", "code": "42858" }
    ]
};

const lottery = {
    "day": "11/07/2024",
    "answer": "14/23/56"
}

router.use("/json", (req, res) => {
    res.json(tasks);
})
router.use("/lottery",(req,res)=>{
    res.json(lottery);
});
router.use("/home", route);
router.use("/about", (req, res) => {
    res.write("<h1>about more</h1>");
    res.end();
})
router.use("/admin", route);

module.exports = router;