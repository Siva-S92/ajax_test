import mongoose from 'mongoose';

export function dataBaseConnection(){
    
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (err) {
        console.log("Database Connection Failed", err);
    };
};