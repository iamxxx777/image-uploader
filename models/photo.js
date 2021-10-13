import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const photoSchema = new Schema({
    imgURL: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    cloudID: {
        type: String,
    },
    },
{timestamps: true}
);


module.exports = mongoose.models.Photo || mongoose.model('Photo', photoSchema);