const fs = require('fs');
const path = require('path');

// Hàm đọc file JSON
function readJSONFile(fileName) {
    const filePath = path.join(__dirname,"../../../dataJson", fileName);
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    resolve(JSON.parse(data));
                } catch (parseErr) {
                    reject(parseErr);
                }
            }
        });
    });
}

module.exports = readJSONFile;