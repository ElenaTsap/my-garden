/* const multer = require('multer');
// settings for multer
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'images')
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() +'_'+ file.originalname)
    }
});

exports.upload = multer({storage}); */

