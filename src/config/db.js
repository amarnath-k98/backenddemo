import mongoose from "mongoose";


const mongodbURI =
  "mongodb+srv://amarmagesh717_db_user:z3GSbmt0jNqsJiou@backenddemo.s4olsp8.mongodb.net/SampleDB?retryWrites=true&w=majority&appName=backenddemo";


const connectDB = () => {
    mongoose
        .connect(mongodbURI)
        .then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    }); 
}

//     const db = mongoose.connection;
//     db.on("error", console.error.bind(console, "MongoDB connection error:"));
//     db.once("open", () => {
//         console.log("Connected to MongoDB");
//     });
// };


export default connectDB;