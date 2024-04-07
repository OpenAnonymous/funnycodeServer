const Adminmodel = require('../model/admin.js');

class administrators{
    read = async (username,password) => {
        try {
           let admin =  await Adminmodel.find({username: username, password: password});
           if(admin.length > 0) {
                return admin
           }
           else {
               return false;
           }
        } catch (error) {
            return false;
        }
    }

    create =  async (username,password) => {
        let admin = new Adminmodel({
            username: username,
            password: password
        })
        let result = await admin.save();
        if (result._id) {
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports = new administrators();