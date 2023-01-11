const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'matosr96',
    api_key: '139752779286957',
    api_secret:'1OkBlBgkOGzlaFsAXuP8XGK-XU8',
}
);

module.exports = cloudinary;
