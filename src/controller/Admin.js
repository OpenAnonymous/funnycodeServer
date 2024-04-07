const Administrator = require('../service/admin.js');
const authToken = require('../middlewares/accesstoken/autoken.js');

class Admin{
    signin = async (req,res,next)=>{
        try {
            let username = req.body.username;
            let password = req.body.password;
            let token = await authToken({username: username, password: password});
            let result = await Administrator.read(username, password);

            console.log(token,"==",result);
            if(result.length > 0){
                res.status(200).json({
                    state : true,
                    token : token
                })
            }
            else if(!result || result.length === 0){
                res.status(404).json({
                    state : false
                })
            }
            
        } catch (error) {
            next(error);
        }
    }

    signup = async (req,res,next) => {
        let username = req.body.username;
        let password = req.body.password;

        let result = await Administrator.create(username, password);
        if(result){
            res.status(200).json({
                state : true
            })
        }else{
            res.status(404).json({
                state : false
            })
        }
    }

}
module.exports = new Admin();