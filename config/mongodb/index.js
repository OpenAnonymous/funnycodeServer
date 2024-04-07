const mongoose = require('mongoose');
require('dotenv').config();

let connect = async ()=>{
            try {
                await mongoose.connect(
                    'mongodb+srv://vanmanh2003:Manh.'+process.env.MGPASS+'@cluster0.xcziya3.mongodb.net/?retryWrites=true&w=majority'
                );
                console.log('Database - Connect successfully !!!');
            } catch (error) {
                console.log('Database - Connect failure!!!');
    }
}
        
module.exports = connect;
    

