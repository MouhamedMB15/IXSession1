


const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Cloudinary creditials
cloudinary.config({
  cloud_name: 'dndblkq19', 
  api_key: '675445666494142', 
  api_secret: 'yfJuTwxz18l4WZ8ZnWShZWlR1Us',
});

// Create a storage object with Cloudinary configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'blog-images',
    format: async (req, file) => 'png', // promisies
    public_id: (req, file) => Date.now() + '-' + file.originalname.split('.')[0],
  },
});

module.exports = { cloudinary, storage };
