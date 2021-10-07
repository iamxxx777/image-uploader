import cloudinaryV from '../../config/cloudinary';
import upload from '../../config/multer';
import dbConnect from '../../config/dbConnect';
import Image from '../../models/file';
import nextConnect from 'next-connect';

dbConnect();

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({error: `Sorry, there was an error! ${error.msg}`});
    },
    onNoMatch(req, res) {
        res.status(405).json({error: `Method '${req.method}' is not allowed`})
    }
});


apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
    let data = {};

    try {
        if(req.file) {
            const result = await cloudinaryV.uploader.upload(req.file.path);
            
            if(result.secure_url) {
                data.imgURL = result.secure_url;
                data.cloudID = result.public_id;
                console.log(data);
                let newImage = new Image(data);
                await newImage.save();
                res.status(201).json({
                    success: "Image uploaded succesfully",
                    imageUrl: result.secure_url
                });
            } else {
                res.json({err: "could not upload image"});
            }

        } else {
            res.json({err: "image not found"});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
})

export default apiRoute;

export const config = {
    api: {
      bodyParser: false, // Disallow body parsing, consume as stream
    },
};