import mongoose from 'mongoose';

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

const fileSchema = new Schema({
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
    }
});


module.exports = mongoose.models.Image || mongoose.model('Image', fileSchema);