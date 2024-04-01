const fs = require('fs');


class CONTROL{
    read = async (req,res,next)=>{
        try {
            res.write("<h1>read all file</h1>");
            res.end();
        } catch (error) {
            next(error);
        }
    }
    create =  async (req,res,next)=>{
        try {
           
            res.status(200).json({
                mes:"success",
            })
        } catch (error) {
            next(error);
        }
    }
    update =  async (req,res,next)=>{
        try {
            
        } catch (error) {
            
        }
    }
    delete = async (req,res,next)=>{
        try {
            const filePath = `uploads/thumnal/${req.namefile}`;

            fs.unlink(filePath, (err) => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('File deleted successfully!');
                }
            });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new CONTROL;