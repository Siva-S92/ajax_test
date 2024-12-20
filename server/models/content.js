import { ObjectId } from "bson";
import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    file: {
        type:String,
    },
    description: {
        type: String,
        required: true,
    }
    
})

const Content = mongoose.model("content", contentSchema);
export { Content };