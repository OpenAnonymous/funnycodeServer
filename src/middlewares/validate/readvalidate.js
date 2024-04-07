const Joi = require('joi');

const schema = Joi.object({
    pagenumber: Joi.number().integer().required(),
});

const validateData = (req, res, next) => {
    const { error, value } = schema.validate({ pagenumber: req.query.pagenumber });
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

module.exports = validateData;