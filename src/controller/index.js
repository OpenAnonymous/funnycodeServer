const fs = require('fs').promises;
const path = require('path');
const serviceob = require('../service/index.js');
const md5 = require('../ulis/md5/md5.js');


class CONTROL {
    read = async (req, res, next) => {
        try {
            let pagenumber = req.query.pagenumber;
            let cardcodes = await serviceob.read(pagenumber);
            
            res.status(200).json({
                status: true,
                masage: "ok",
                cardcodes: cardcodes
            })
        } catch (error) {
            next(error);
        }
    }
    readFile = async (req, res, next) => {
        try{
            let path = req.query.path;
            console.log(path)
            res.sendFile(path);
        }
        catch(e){
            next(e);
        }
    }
    create = async (req, res, next) => {
        try {
            let filecode = req.files['filecode'][0];
            let thumnal = req.files['thumnal'][0];

            let filecodename = filecode.originalname;
            let thumnalname = thumnal.originalname;

            let title = req.body.title;
            let filecodepath = path.join(__dirname, `../../uploads/filecode/${filecodename}`);
            let thumnalpath = path.join(__dirname, `../../uploads/thumnal/${thumnalname}`);

            await serviceob.create(title, filecodepath, thumnalpath);
            res.status(200).json({
                status:true,
                masage: "ok"
            })

        } catch (error) {
            next(error);
        }
    }
   
    delete = async (req, res, next) => {
        try{
            let title = req.query.title;
            console.log(title);
            let re =  await serviceob.delete(title);
            if(re){
                res.status(200).json({
                    status:true,
                    masage: "ok"
                })
            }
            else{
                res.status(400).json({
                    status:false,
                    masage: "failure"
                })
            }
        }
        catch(error){
            next(error)
        }
    }
}

module.exports = new CONTROL;