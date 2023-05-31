import mongoose from "mongoose";

const offerSchema = new mongoose.Schema({
    images: [String]
})

const offer = mongoose.models.Offer ||  mongoose.model('Offer', offerSchema);
export default offer;
