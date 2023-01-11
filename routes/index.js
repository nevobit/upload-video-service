const router = require('express').Router();
const uploadController = require('../controllers/upload');

const storage =require('../lib/multer');

router.post('/video', storage.single('file'), uploadController.uploadVideo);

module.exports = router;