import cloudinary from 'cloudinary';

const cloudinaryV = cloudinary.v2;

cloudinaryV.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_PUBLIC,
    api_secret: process.env.CLOUDINARY_SECRET,
    secure: true
});

module.exports = cloudinaryV;