const router = require('express').Router();
const plantsController = require('../controller/plants');
//const multerMid = require('../middleware/multer')

const multer = require('multer');
// settings for multer
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, 'public/images')
    },
    filename: function(req, file, callback) {
        callback(null, Date.now() +'_'+ file.originalname)
    }
});
const upload = multer({storage});

router.post('/new', upload.single('photo'), plantsController.postPlant);
router.get('/all', plantsController.getAll);
module.exports = router;