class Admin{
    signin = async (req,res,next)=>{
        try {
            res.write("<h1>admin page</h1>");
            res.end();
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new Admin();