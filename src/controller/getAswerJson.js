const readJSONFile = require("../ulis/readFile/index.js");

async function getAnswer(name){
    const answer = await readJSONFile(name+".json");
    return answer ? answer : false;
}

module.exports = getAnswer;