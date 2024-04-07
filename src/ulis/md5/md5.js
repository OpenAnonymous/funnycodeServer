const CryptoJS = require('crypto-js');
require('dotenv').config();

class md5 {
    md5Encrypt(str) {
        return CryptoJS.RC4.encrypt('my message', process.env.SECRET_KEY || 0).toString();
    }
    md5Decrypt(str) {
        var bytes = CryptoJS.RC4.decrypt(str, process.env.SECRET_KEY || 0);
        return bytes.toString(CryptoJS.enc.Utf8);
    }
}

module.exports = new md5();


// Sử dụng hàm md5
// const hash = md5('hello world');
// console.log(hash); // Kết quả: 5eb63bbbe01eeed093cb22bb8f5acdc3
