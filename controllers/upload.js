
const Upload = require('../models/upload');
const cloudinary = require('../lib/cloudinary');

exports.uploadVideo = (req, res) => {
    cloudinary.uploader.upload(req.file.path,
        {
            resource_type: "video",
            folder: "video",
          },
        
        (err, result) => {

            if(result)
            {
                console.log({result})
                return res.status(201).send(result.secure_url);
            }
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
    }
    );

    console.log('Uploading video');
}