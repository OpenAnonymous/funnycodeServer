const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      console.dir(file);
      if (file.fieldname === 'thumnal') {
        cb(null, 'uploads/thumnal');
      } else if (file.fieldname === 'filecode') {
        cb(null, 'uploads/filecode');
      } else {
        cb(null, 'uploads'); 
      }
    },
    filename: function (req, file, cb) {
        // Extract the original file extension (if present)
        // Combine the field name, timestamp, and extension
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });
var cpUpload = upload.fields([
  { name: 'thumnal', maxCount: 1 },
  { name: 'filecode', maxCount: 1 },
]);

module.exports = cpUpload;
  