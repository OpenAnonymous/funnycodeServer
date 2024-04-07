const Joi = require('joi');

const schema = Joi.object({
    title: Joi.string().min(7).required()
});

const validateData = async (req, res, next) => {
        const { error } = schema.validateAsync({title:req.query.title});
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        // Nếu không có lỗi, chuyển tiếp tới middleware tiếp theo
        next();
};


module.exports = validateData;