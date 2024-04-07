const jwt = require("jsonwebtoken");

let verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(401).send({state:false, message: "Token không được cung cấp"});
    }
    token = token.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            return res.status(401).send({state: false, message: "Từ chối truy cập"});
        }
        next();
    });
    
};

module.exports = verifyToken;