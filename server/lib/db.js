import mongoose from 'mongoose';

export function dataBaseConnection(){
    
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB connected");
    } catch (err) {
        console.log("MongoDB Connection Failed", err);
    };
};