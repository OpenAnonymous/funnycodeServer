const fs = require('fs').promises;
const cardcode = require("../model/index.js")
class service{
    async read(pagenumber){
        let limit = 6;
        let skip = (pagenumber-1) * 6;
        let result = await cardcode.find().skip(skip).limit(limit);
        return result;
    }

    async create(title,filecodepath,thumnalpath){
        try{
            let cc = new cardcode({
                title: title,
                filecodepath: filecodepath,
                thumnalpath: thumnalpath
            });
            await cc.save();
        }
        catch (error) {
            throw new Error();
        }
    }

    async delete(title) {
        try {
            let result = await cardcode.find({ title: title });
            
            if (!result) {
                let filecodepath = result[0].filecodepath;
                let thumnalpath = result[0].thumnalpath;
                Promise.all([
                    fs.unlink(filecodepath),
                    fs.unlink(thumnalpath),
                    cardcode.deleteOne({ title: title })
                ]).then(() => {
                    console.log('Files deleted successfully!');
                }).catch((err) => {
                    console.log(err.message);
                });
                return true;
            }
            else{
                return false;
            }
        }
        catch (error) {
            throw new Error();
        }
        
    }
    

}

module.exports = new service();