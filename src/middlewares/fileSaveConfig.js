const multer = require('multer');
const path = require('path');

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
      if (file.fieldname === 'thumnal') {
        cb(null, 'uploads/thumnal');
      } else if (file.fieldname === 'filecode') {
        cb(null, 'uploads/filecode');
      } else {
        cb(null, 'uploads'); 
      }
    },
    filename: function (req, file, cb) {
      
        cb(null, file.originalname);
    }
});

const upload = multer({ 
  storage: storage,
  fileFilter: function (req, file, cb) {
    const extname = path.extname(file.originalname).toLowerCase();
    if (extname === '.js' || extname === '.txt') {
      cb(null, true);
    }
    else if (extname === '.jpg' || extname === '.png') {
        cb(null, true);
    }
    else {
        cb(new Error('Only image files are allowed'));
    }
  }
});


var cpUpload = upload.fields([
  { name: 'thumnal', maxCount: 1 },
  { name: 'filecode', maxCount: 1 },
]);

module.exports = cpUpload;
  