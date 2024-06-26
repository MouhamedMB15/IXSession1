

const multer = require('multer');
const { storage } = require('../services/cloudinary');

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new Error('Not an image! Please upload only images.'), false);
    }
  },
  limits: {
    fileSize: 1024 * 1024 * 5, // 5MB max file size
  },
});

module.exports = { upload };
