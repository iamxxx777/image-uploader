import cloudinaryV from '../../config/cloudinary';
import upload from '../../config/multer';
import dbConnect from '../../config/dbConnect';
import Photo from '../../models/photo';
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

apiRoute.get(async (req, res) => {
    try {
        const images = await Photo.find({}).sort({'createdAt': -1});
        res.status(201).json(images);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Server Error"});
    }
})

apiRoute.post(async (req, res) => {
    let data = {};

    try {
        if(req.file) {
            const result = await cloudinaryV.uploader.upload(req.file.path);
            
            if(result.secure_url) {
                data.imgURL = result.secure_url;
                data.cloudID = result.public_id;
                data.label = req.file.originalname.replace(/.jpg|.jpeg|.png/, "");
                let newImage = new Photo(data);
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