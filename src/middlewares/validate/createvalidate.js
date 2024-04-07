const Joi = require('joi');
const cardcode = require('../../model/index.js');

const schema = Joi.object({
    title: Joi.string().max(100).required(),
    thumnal: Joi.object().required(),
    filecode: Joi.object().required()
});

const validateData = async (req, res, next) => {
    try{
        let result = await cardcode.findOne({title:req.body.title})
        if(!result){
            const { error, value } = schema.validate({
                title: req.body.title,
                filecode: req.files.filecode[0],
                thumnal: req.files.thumnal[0]
            });

            if (error) {
            res.status(400).json({
                 error: error.details[0].message 
                });       
            }
            console.log("======",value);
            
            next();
            
        }
        else{
            res.status(400).json({
                state : false,
                message : "title already exist"
            })
        }
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
};

module.exports = validateData;
