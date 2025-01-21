import mongoose from "mongoose";

export default function connectDB() {
    //connect to mongoDB
    mongoose.connect(process.env.MONGODB_URI).then(() => {
        console.log("connected to MongoDB")
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    })

}